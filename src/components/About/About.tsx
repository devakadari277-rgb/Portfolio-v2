import { Container } from "./styles";
import VinayakSingh from "../../assets/Deva.webp";

import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2>About me</h2>

        <p>
          Hi! I'm <span className="text-blue-500">Kadari</span>
          <span className="text-red-500">Deva</span>, an enthusiastic
          Software Engineer skilled in web development, machine learning,
          and scalable software development.
        </p>

        <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          I build responsive web applications, fine-tune ML models,
          and implement robust backend services.
        </p>

        <p>
          I also work with Backend & Database technologies like MongoDB
          and MySQL to streamline content management.
        </p>

        <div className="education">
          <h3>Education:</h3>
          <h4>B.Tech (Computer Science and Engineering)</h4>
          <p>GMR Institute of Technology, Rajam | 2023 - 2027</p>
          <p>CGPA : 8.78</p>
        </div>

        <div className="experience">
          <h3>Experience:</h3>
          <h4>Internship Experience</h4>
          <p>TopNotch Software Solutions | 2024, 1 Month</p>
          <p>Visakhapatnam</p>
        </div>

        <h3>Here are my main skills:</h3>

        <div className="hard-skills">
          <div className="hability">
            <img src={python} alt="Python" />
          </div>

          <div className="hability">
            <img src={java} alt="Java" />
          </div>

          <div className="hability">
            <img src={jsIcon} alt="JavaScript" />
          </div>

          <div className="hability">
            <img src={reactIcon} alt="React" />
          </div>

          <div className="hability">
            <img src={typescriptIcon} alt="TypeScript" />
          </div>

          <div className="hability">
            <img src={vueIcon} alt="Vue" />
          </div>

          <div className="hability">
            <img src={wordpress} alt="WordPress" />
          </div>

          <div className="hability">
            <img src={shopify} alt="Shopify" />
          </div>

          <div className="hability">
            <img src={htmlIcon} alt="HTML" />
          </div>

          <div className="hability">
            <img src={cssIcon} alt="CSS" />
          </div>

          <div className="hability">
            <img src={boostrapIcon} alt="Bootstrap" />
          </div>
        </div>
      </div>

      <div className="about-image">
        <img src={VinayakSingh} alt="Kadari Deva" />
      </div>
    </Container>
  );
}