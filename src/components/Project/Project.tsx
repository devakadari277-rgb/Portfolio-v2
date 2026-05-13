import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>

      <div className="projects">

        {/* Project 1 */}
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="project-links">
              <a
                href="https://github.com/devakadari277-rgb/Dev77project"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </header>

          <div className="body">
            <h3>URL Malware Detector</h3>

            <p>
              Malware analysis detects, studies, and prevents harmful
              cyberattacks on systems.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Flask</li>
              <li>SQLite</li>
            </ul>
          </footer>
        </div>

        {/* Project 2 */}
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="project-links">
              <a
                href="https://github.com/devakadari277-rgb/Finance"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </header>

          <div className="body">
            <h3>Finance Tracker</h3>

            <p>
              Finance tracker helps monitor income, expenses, savings,
              and overall financial management.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>Flask</li>
              <li>Python</li>
              <li>SQLite</li>
            </ul>
          </footer>
        </div>

        {/* Project 3 */}
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="project-links">
              <a
                href="https://github.com/devakadari277-rgb/Finance-Budget-Tracker"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>

              <a
                href="https://github.com/devakadari277-rgb/Finance-Budget-Tracker"
                target="_blank"
                rel="noreferrer"
              >
                <img src={externalLink} alt="External Link" />
              </a>
            </div>
          </header>

          <div className="body">
            <h3>Finance Budget Tracker</h3>

            <p>
              Finance tracker helps monitor income, expenses, savings,
              and overall financial management.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>Angular</li>
              <li>MongoDB</li>
            </ul>
          </footer>
        </div>

        {/* Project 4 */}
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="project-links">
              <a
                href="https://github.com/naveen957359/Buy-smart"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>

              <a
                href="https://github.com/naveen957359/Buy-smart"
                target="_blank"
                rel="noreferrer"
              >
                <img src={externalLink} alt="External Link" />
              </a>
            </div>
          </header>

          <div className="body">
            <h3>Buy Smart Shopping App</h3>

            <p>
              Buy Smart Shopping App helps users compare prices,
              track discounts, find deals, and save money while
              shopping online.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>MongoDB</li>
            </ul>
          </footer>
        </div>

        {/* Project 5 */}
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <div className="project-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={externalLink} alt="External Link" />
              </a>
            </div>
          </header>

          <div className="body">
            <h3>Library Management System</h3>

            <p>
              Library Management System helps manage books,
              issue records, returns, and student library
              activities efficiently.
            </p>
          </div>

          <footer>
            <ul className="tech-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </footer>
        </div>

      </div>
    </Container>
  );
}