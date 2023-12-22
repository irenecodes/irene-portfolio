import Link from 'next/link';

import { useRouter } from 'next/router';

import ScrollTopArrow from './scroll-top-arrow-component';

export default function ConditionalCTA() {
  const router = useRouter();

  return (
    <>
      {router.pathname == '/' ? (
        <aside>
          <h2>Want to see more?</h2>
          <Link href="/projects" className="btn-primary">
            View some projects
          </Link>
          <ScrollTopArrow />
        </aside>
      ) : router.pathname == '/projects' ? (
        <aside className="grey-background">
          <h2>Want to get in touch?</h2>
          <Link href="/contact" className="btn-primary">
            Contact me
          </Link>
          <ScrollTopArrow />
        </aside>
      ) : router.pathname == '/contact' ? (
        <aside>
          <h2>Thanks for visiting! Want to view the site again? 😉</h2>
          <Link href="/" className="btn-primary">
            Go to home page
          </Link>
          <ScrollTopArrow />
        </aside>
      ) : null}
    </>
  );
}
