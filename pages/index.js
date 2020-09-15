import Head from "next/head";
import Link from "next/link";

import { useState, useCallback, useEffect } from "react";

// importing components
const SocialIcons = loadable(() =>
  import("../components/social-icons/social-icons-component")
);

// importing module styles
import homeStyles from "../styles/Home.module.scss";

import { motion } from "framer-motion";
import loadable from "@loadable/component";
import LazyLoad from "react-lazyload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faLess,
  faJs,
  faReact,
  faVuejs,
  faGit,
  faAccessibleIcon,
  faPython,
  faFigma,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import { faExpand } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  const isTablet = useMediaQuery(768);

  return (
    <>
      <Head>
        <title>Irene Truong | Web Developer</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <LazyLoad height={900}>
        <section className="home-hero">
          <div className="hero-image-container">
            <LazyLoad height={900}>
              <img src="images/hero.jpg" alt="" />
            </LazyLoad>
          </div>
          <motion.div
            className="introduction"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            <h1>
              Irene Truong is a web developer specializing in{" "}
              <span>Front-End Development</span>. She brings{" "}
              <span>experience</span> in both start-up and corporate settings.
            </h1>
            <div>
              <Link href="/projects">
                <a className="btn-primary">View projects</a>
              </Link>
            </div>
            <div className={homeStyles.socialContainer}>
              <SocialIcons />
            </div>
          </motion.div>
          <a
            href="#about"
            className="scroll-to-about"
            aria-label="Click to scroll to Irene's about section."
          >
            <img src="/images/white-arrow.svg" alt="" className="arrow" />
          </a>
        </section>
      </LazyLoad>

      <section className={homeStyles.about} id="about">
        <div className={homeStyles.portraitContainer}>
          <LazyLoad height={400}>
            <img src="/images/PortraitSquare.jpg" alt="Irene's headshot." />
          </LazyLoad>
        </div>
        <div className={homeStyles.copy}>
          <h2>About me</h2>
          <p>
            Hihi! My name is Irene, and I am a front-end developer situated in
            Toronto, Ontario.
          </p>
          <p>
            Professionally, I perform accessibility enhancements for websites
            and work with a ton of legacy code. I write in both React.js and
            Vue.js for more modern sites. This website is written in React.js ☺️
            I also bring professional experience working with Figma as part of
            my growing skillset.
          </p>
          <p>
            I have worked in both start-up and big corporation environments
            coding from scratch and working with content management systems
            (CMS) such as Sitecore. My flexibility and work ethic has allowed me
            to thrive in both capacities, pick up tech and tools quickly, and
            contribute meaningfully.
          </p>
          <p>
            Outside of coding, I am a self-proclaimed professional cat petter,
            play Fall Guys and Pokémon GO, and love to take short walks by
            nature's trails. I am also a fan of the MBTI personality test.
          </p>
        </div>
      </section>
      <section className="grey-background">
        <div className={homeStyles.skills}>
          <div className="current">
            <h2>Fluent in</h2>
            <ul>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faHtml5} />
                <p>HTML5</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faCss3Alt} />
                <p>CSS3</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faSass} />
                <p>SCSS/SASS</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faLess} />
                <p>Less</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faBootstrap} />
                <p>Bootstrap</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faJs} />
                <p>JavaScript</p>
              </li>
              <li>
                <LazyLoad height={40}>
                  <img src="tech-icons/jquery.svg" alt="" />
                  <p>jQuery</p>
                </LazyLoad>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faReact} />
                <p>React</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faVuejs} />
                <p>Vue</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faGit} />
                <p>Git</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faExpand} />
                <p>
                  <abbr title="Responsive Web Design">RWD</abbr>
                </p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faAccessibleIcon} />
                <p>
                  <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>{" "}
                  2.0
                </p>
              </li>
            </ul>
          </div>
          <div className="future">
            <h2>Levelling up on</h2>
            <ul>
              <li>
                <LazyLoad height={40}>
                  <img src="tech-icons/redux.svg" alt="" />
                </LazyLoad>
                <p>Redux</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faPython} />
                <p>Python</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faFigma} />
                <p>Figma</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="featured-project">
        <h2>Featured Project</h2>
        {isTablet ? (
          <video width="600" height="270" controls>
            <source src="/images/LHVideoPreview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <video width="1000" height="525" controls>
            <source src="/images/LHVideoPreview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <h3>Lawson Heights</h3>
        <div className="featured-layout">
          <div className="project-description">
            <p>
              Client site built at Mobile Fringe. Front-end built with Vue.js to
              extract dynamic content from CMS. Utilizes Vuex for state
              management, and Vue-Router for routing.{" "}
            </p>
            <p className="tech-used">
              <strong>Used:</strong>Vue.js, Nuxt.js, HTML5, SCSS, Bootstrap,
              JavaScript, Responsive Web Design
            </p>
          </div>
          <a
            className="btn-secondary"
            href="https://mallatlawsonheights.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View live
          </a>
        </div>
      </section>
    </>
  );
}
