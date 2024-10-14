import { motion } from 'framer-motion';

const renderButton = (href, text) => (
  <a
    className="btn-secondary"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {text}
  </a>
);

const renderButtons = (liveUrl, githubUrl) => {
  return (
    <>
      {liveUrl && renderButton(liveUrl, 'View live')}
      {githubUrl && renderButton(githubUrl, 'Source code')}
    </>
  );
};

const ProjectCard = (props) => {
  const {
    id,
    imagePath,
    title,
    description,
    skills,
    liveUrl = '',
    githubUrl = '',
  } = props.project;
  return (
    <>
      <motion.div
        initial={{ x: 5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        className="card"
        key={id}
      >
        {imagePath && (
          <img src={imagePath} alt={`Preview image of ${title}.`} />
        )}

        <div className="copy">
          <h2>{title}</h2>
          <div className="project-description">
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></p>
            <p className="tech-used">
              <strong>Used:</strong>
              {skills.join(', ')}
            </p>
          </div>
        </div>

        <div className="button-positioning">
          <div className="button-container">
            {renderButtons(liveUrl, githubUrl)}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
