export default function ProjectCard(props) {
  return (
    <>
      <div className="card" key={props.project.id}>
        <img src={props.project.imagePath} alt="" />
        <div className="copy">
          <h3>{props.project.title}</h3>
          <div className="project-description">
            <p>{props.project.description}</p>
            <p className="tech-used">
              <strong>Used:</strong>
              {props.project.skills}
            </p>
          </div>
        </div>
        {props.project.liveUrl && props.project.githubUrl ? (
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
                Source Code
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
        )}
      </div>
    </>
  );
}