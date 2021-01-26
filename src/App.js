import "./App.css";
import Typewriter from "./Typewriter";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler text-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Eyüp Sercan UYGUR
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/publications">
                Publications
              </Link>
            </li>
            <li className="nav-item">
              <a href="./portfolio_cv.pdf" className="nav-link text-light">
                {" "}
                View CV Online
              </a>
            </li>
            <li>
              <a
                href="./portfolio_cv.pdf"
                className="nav-link text-light"
                download="Eyüp Sercan UYGUR"
                id="download"
              >
                {" "}
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="d-flex justify-content-center pt-4">
        <img
          src="./Ben7.JPG"
          alt="me"
          className="rounded rounded-circle my-photo"
        />
      </div>
      <div className="text-center pt-4">
        <h1 className="text-light font-weight-bolder">Eyüp Sercan UYGUR</h1>
      </div>
      <div className="text-center pt-4">
        <h2 className="text-light">Software Developer</h2>
      </div>
      <div className="text-center pt-3 col-12 col-lg-8 mx-auto">
        <Typewriter
          className="text-light"
          inputStrings={[
            "I am a material scientist and a developer. Residing between Kuşadası and İstanbul, Turkey. Working as a part-time Technical Support Engineer at Microverse. Interested in music and poetry. Below are my skills. I can help you to build a product.",
          ]}
        />
      </div>
      <div className="container-fluid container-lg mx-auto text-center mt-5">
        <div className="row text-center mx-auto">
          <div className="col col-lg-4 text-center">
            <h5 className="text-danger">Languages</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://openclassrooms.com/en/course-certificates/4872473806"
                  rel="noreferrer"
                  target="blank"
                  className="text-light disabled"
                >
                  JavaScript
                </a>
              </li>
              <li>
                <a
                  href="https://www.credential.net/fd59c9a6-a0b0-4f1b-a001-735c9fbadea8#gs.eem28t"
                  rel="noreferrer"
                  target="blank"
                  className="text-light disabled"
                >
                  Ruby
                </a>
              </li>
              <li>
                <a
                  href="https://openclassrooms.com/en/course-certificates/1201771651"
                  target="blank"
                  rel="noreferrer"
                  className="text-light disabled"
                >
                  HTML
                </a>
              </li>
              <li>
                <a
                  href="https://openclassrooms.com/en/course-certificates/8063084933"
                  target="blank"
                  rel="noreferrer"
                  className="text-light disabled"
                >
                  CSS, SCSS
                </a>
              </li>
              <li>
                <p className="mb-0 text-light disabled">
                  Matlab
                </p>
              </li>
            </ul>
          </div>
          <div className="col col-lg-4 text-center">
            <h5 className="text-danger">Frameworks</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://openclassrooms.com/en/course-certificates/2235830313"
                  target="blank"
                  rel="noreferrer"
                  className="text-light disabled"
                >
                  React & Redux & Jquery
                </a>
              </li>
              <li>
                <a
                  href="https://www.credential.net/b2805b3f-2003-4116-9831-f85855a5ed6e#gs.rq7gyo"
                  target="blank"
                  className="text-light disabled"
                >
                  Rails
                </a>
              </li>
              <li>
                <a
                  href="https://www.credential.net/b2805b3f-2003-4116-9831-f85855a5ed6e#gs.rq7gyo"
                  target="blank"
                  className="text-light disabled"
                >
                  RSpec
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-lg-4 text-center mb-5">
            <h5 className="text-danger">Skills</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://openclassrooms.com/en/course-certificates/9155802531"
                  target="blank"
                  rel="noreferrer"
                  className="text-light disabled"
                >
                  Bootstrap
                </a>
              </li>
              <li>
                <p className=" mb-0 text-light disabled">
                  Git & GitHub
                </p>
              </li>
              <li>
                <p className=" mb-0 text-light disabled">
                  Remote Pair Programming
                </p>
              </li>
              <li>
                <p className=" mb-0 text-light disabled">
                  Finite Element Analysis
                </p>
              </li>
              <li>
                <p className=" mb-0 text-light disabled">
                  Statistics
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="my-footer">
        <ul className="list-unstyled d-flex justify-content-center">
          <li>
            <a
              href="https://github.com/eypsrcnuygr"
              target="_blank"
              rel="noreferrer"
              className="text-light disabled-2"
            >
              <i className="fab fa-github mx-2"></i>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@sercanuygur"
              target="_blank"
              rel="noreferrer"
              className="text-light disabled-2"
            >
              <i className="fab fa-medium-m mx-2"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/eypsrcnuygr"
              target="_blank"
              rel="noreferrer"
              className="text-light disabled-2"
            >
              <i className="fab fa-twitter mx-2"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/eypsrcnuygr/"
              target="_blank"
              rel="noreferrer"
              className="text-light disabled-2"
            >
              <i className="fab fa-linkedin-in mx-2"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
