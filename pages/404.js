import Link from 'next/link';
import Head from 'next/head';
import { fullName } from '../shared/constants';

import { motion } from 'framer-motion';
const svgVariants = {
  hidden: {
    x: -10,
  },
  visible: {
    x: 0,
  },
  transition: { duration: 3 },
};

const pathVariants = {
  // initial state
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
};

const pathVariants2 = {
  // initial state
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{fullName} | Web Developer</title>
      </Head>
      <section className="error-section">
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
            stroke="#1C2C63"
            strokeWidth="2"
          ></motion.rect>
          <rect
            x="76"
            y="90"
            width="490"
            height="684"
            stroke="#FFAB5C"
            strokeWidth="2"
          />
          <motion.rect
            variants={pathVariants2}
            initial="hidden"
            animate="visible"
            x="198.173"
            y="46.1937"
            width="490.136"
            height="684.341"
            transform="rotate(12.5709 198.173 46.1937)"
            stroke="#0D8274"
            strokeWidth="2"
          ></motion.rect>
        </motion.svg>
        <motion.div animate={{ y: 50 }} className="error-content">
          <h1>Looks like the page you're looking for doesn't exist.</h1>

          <Link legacyBehavior href="/" className="btn-primary">
            Go to home page
          </Link>
        </motion.div>
      </section>
    </>
  );
}
