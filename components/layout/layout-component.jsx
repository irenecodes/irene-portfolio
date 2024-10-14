import Head from 'next/head';

// components
import NavBar from '../navigation/nav-bar-component';
import PersistFooter from '../footer/footer-component';
import ConditionalCTA from '../conditionalCTA/conditional-cta.component';
import { fullName } from '../../shared/constants';

const description = `${fullName} is a Full Stack Engineer specializing in Front-End servicing the Toronto and Greater Toronto Area.`;
export const siteTitle = `${fullName} | Full Stack Engineer`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Front-End, Front End Developer, Web Developer, Irene Truong, Developer, GTA Web Developer, Toronto Web Developer, Full Stack Engineer"
        />
        <meta name="author" content={fullName} />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/OG_Image.jpg" />
        <meta
          property="og:url"
          content="https://irene-truong.netlify.app/"
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <header id="top">
        <NavBar />
      </header>

      <main>{children}</main>

      <ConditionalCTA />
      <PersistFooter />
    </>
  );
}
