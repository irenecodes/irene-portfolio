import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
  return (
    <>
      <nav>
        <ul className="social-icons-container">
          <li>
            <a
              href="https://ca.linkedin.com/in/irene-truong"
              target="_blank"
              aria-label="Go to Irene's LinkedIn page."
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon aria-hidden="true" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/irenecodes"
              target="_blank"
              aria-label="Go to Irene's Github page."
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon aria-hidden="true" icon={faGithub} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
