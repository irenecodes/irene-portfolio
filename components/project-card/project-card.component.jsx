import { motion } from 'framer-motion';

export default function ProjectCard(props) {
  return (
    <>
      <motion.div
        initial={{ x: 5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        className="card"
        key={props.project.id}
      >
        {props.project.imagePath && (
          <img
            src={props.project.imagePath}
            alt={`Preview image of ${props.project.title}.`}
          />
        )}

        <div className="copy">
          <h2>{props.project.title}</h2>
          <div className="project-description">
            <p
              dangerouslySetInnerHTML={{
                __html: props.project.description,
              }}
            ></p>
            <p className="tech-used">
              <strong>Used:</strong>
              {props.project.skills.join(', ')}
            </p>
          </div>
        </div>
        {/* {props.project.liveUrl && props.project.githubUrl ? (
          <div className="button-positioning">
            <div className="button-container">
              <a
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                href={props.project.liveUrl}
              >
                View live
              </a>
              <a
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                href={props.project.githubUrl}
              >
                Source code
              </a>
            </div>
          </div>
        ) : !props.project.githubUrl ? (
          <div className="button-positioning">
            <div className="button-container">
              <a
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                href={props.project.liveUrl}
              >
                View live
              </a>
            </div>
          </div>
        ) : (
          <div className="button-positioning">
            <div className="button-container">
              <a
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                href={props.project.githubUrl}
              >
                Source code
              </a>
            </div>
          </div>
        )} */}

        <div className="button-positioning">
          <div className="button-container">
            {props.project.liveUrl && props.project.githubUrl && (
              <>
                <a
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.project.liveUrl}
                >
                  View live
                </a>
                <a
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.project.githubUrl}
                >
                  Source code
                </a>
              </>
            )}
            {props.project.liveUrl && !props.project.githubUrl && (
              <a
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                href={props.project.liveUrl}
              >
                View live
              </a>
            )}
            {!props.project.liveUrl && props.project.githubUrl && (
              <a
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                href={props.project.githubUrl}
              >
                Source code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
