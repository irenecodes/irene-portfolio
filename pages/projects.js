import Head from 'next/head';
import React from 'react';

import PROJECTS_DATA from '../components/projects.data';

import loadable from '@loadable/component';
const ProjectCard = loadable(() =>
  import('../components/project-card/project-card.component')
);

import { motion } from 'framer-motion';
import { fullName } from '../shared/constants';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projectsData: PROJECTS_DATA,
      currentFilter: 'ALL',
      skillsList: [
        {
          id: 1,
          name: 'ALL',
        },
        {
          id: 2,
          name: 'React.js',
        },
        {
          id: 3,
          name: 'Vue.js',
        },
        {
          id: 4,
          name: 'Bootstrap',
        },
        {
          id: 5,
          name: 'JavaScript',
        },
        {
          id: 6,
          name: 'HTML5',
        },
        {
          id: 7,
          name: 'CSS3',
        },
        {
          id: 8,
          name: 'LESS',
        },
        {
          id: 9,
          name: 'SASS/SCSS',
        },
        {
          id: 10,
          name: 'Mobile First',
        },
      ],
    };
  }
  filterSkill = (e) => {
    this.setState({ currentFilter: e.target.value });
  };

  render() {
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

    const { projectsData, currentFilter, skillsList } = this.state;
    const filteredProjects = projectsData.filter((project) =>
      project.skills.includes(currentFilter)
    );
    const allProjects = projectsData;
    return (
      <>
        <Head>
          <title>{fullName} | Projects</title>
        </Head>

        <section className="projects-container">
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
          <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }}>
            Projects
          </motion.h1>
          <motion.ul
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="skills-list"
          >
            {skillsList.map((skill) => (
              <button
                onClick={this.filterSkill}
                key={skill.id}
                value={skill.name}
                className={`${currentFilter == skill.name ? 'active-btn' : ''}`}
              >
                {skill.name}
              </button>
            ))}
          </motion.ul>

          {currentFilter == 'ALL' ? (
            <div className="project-card-list">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="project-card-list">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </>
    );
  }
}

export default Projects;
