import Head from 'next/head';

import { useState, useCallback, useEffect } from 'react';

// importing components
const SocialIcons = loadable(() =>
  import('../components/social-icons/social-icons-component')
);

// importing module styles
import homeStyles from '../styles/Home.module.scss';

import { motion } from 'framer-motion';
import loadable from '@loadable/component';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faAngular,
  faNode,
  faAws,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';

import { faExpand, faDatabase } from '@fortawesome/free-solid-svg-icons';

const svgVariants = {
  hidden: {
    x: 10,
  },
  visible: {
    x: 0,
  },
  transition: { duration: 3 },
};

// white rect
const pathVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const pathVariants2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: 'easeInOut',
    },
  },
};

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
      media.addEventListener('change', updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener('change', updateTarget);
    }, []);

    return targetReached;
  };

  const isTablet = useMediaQuery(768);

  return (
    <>
      <Head>
        <title>Irene Truong | Software Engineer</title>
      </Head>
      <LazyLoad height={900}>
        <section className="home-hero">
          <div className="hero-image-container">
            <LazyLoad height={900}>
              <img src="images/hero2.jpg" alt="" />

              <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                width="583"
                height="856"
                viewBox="0 0 783 856"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  x="38"
                  y="50"
                  width="490"
                  height="685"
                  stroke="#fff"
                  strokeWidth="3"
                ></motion.rect>
                <rect
                  x="76"
                  y="90"
                  width="490"
                  height="684"
                  stroke="#FFAB5C"
                  strokeWidth="3"
                />
                <motion.rect
                  variants={pathVariants2}
                  initial="hidden"
                  animate="visible"
                  x="93.173"
                  y="136.1937"
                  width="490.136"
                  height="684.341"
                  transform="rotate(12.5709 198.173 46.1937)"
                  stroke="#0D8274"
                  strokeWidth="3"
                ></motion.rect>
              </motion.svg>
            </LazyLoad>
          </div>
          <motion.div
            className="introduction"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            <h1>
              Irene Truong is a software engineer specializing in{' '}
              <span>Full-Stack Development</span>. She brings{' '}
              <span>experience</span> in both start-up and corporate settings.
            </h1>
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
            Hello there! I'm Irene, a software engineer based in the Greater
            Toronto Area, Ontario.
          </p>
          <p>
            Throughout my career, I've crafted RESTful APIs using Node.js,
            Express, TypeScript, and PostgreSQL. I take pride in enhancing
            website accessibility, working with diverse codebases — both modern
            and legacy. In the earlier stages of my journey, I delved into
            building web applications with Vue, and as time progressed, I've
            gained valuable experience with Angular and React. With over 4 years
            in the field, I thrive both independently and as part of
            collaborative teams.
          </p>
          <p>
            I've worked at early-stage startups and larger corporations, gaining
            experience creating projects from scratch and navigating content
            management systems like Sitecore. My flexibility and work ethic has
            allowed me to thrive in both capacities, pick up tech and tools
            quickly, and contribute meaningfully.
          </p>
          <p>
            Currently, I am working at an early-stage start up to help people
            manage and prioritize their time better.
          </p>
          <p>
            Beyond coding, I find joy in playing Pokémon GO and spending time
            with my niece and nephew.
          </p>
        </div>
      </section>
      <section className="grey-background">
        <div className={homeStyles.skills}>
          <div className="current">
            <h2>I have professional experience with:</h2>
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
                <p>
                  <abbr title="Sassy CSS">SCSS</abbr>/
                  <abbr title="syntactically awesome style sheets">SASS</abbr>
                </p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faLess} />
                <p>
                  <abbr title="Leaner Style Sheets">Less</abbr>{' '}
                </p>
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
                  <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>{' '}
                  2.0
                </p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faAngular} />
                <p>Angular</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faNode} />
                <p>Node.js / Express</p>
              </li>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faDatabase} />
                <p>PostgreSQL</p>
              </li>
            </ul>
          </div>
          <div className="future">
            <h2>Levelling up on</h2>
            <ul>
              <li>
                <FontAwesomeIcon aria-hidden="true" icon={faAws} />
                <p>
                  <abbr title="Amazon Web Services">AWS</abbr>{' '}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
