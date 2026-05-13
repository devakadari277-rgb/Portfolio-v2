import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";

import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";

export function Hero() {
  return (
    <Container id="home">
      <meta
        name="keywords"
        content="Kadari Deva, Web Developer, Portfolio, Python, JavaScript, HTML, CSS, React"
      />

      <div className="hero-text">
        <p>
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </p>

        <h1>Kadari Deva</h1>

        <h3>Web Developer</h3>

        <p className="small-resume">Fresher</p>

        <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </BrowserRouter>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B919938496327"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>

          <a
            href="https://t.me/KadariDeva"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="Telegram" />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={Illustration} alt="Illustration" />
      </div>
    </Container>
  );
}