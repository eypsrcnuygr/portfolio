import { Link } from "react-router-dom";

const Publications = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark mb-3">
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
                View CV
              </a>
            </li>
            <li>
              <a
                href="./portfolio_cv.pdf"
                className="nav-link text-light d-none d-lg-block"
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
      <article className="text-light mb-2 article-3">
        <div className="container">
          <div className="row">
          <div className="col-xl-8 col-12 heading order-2">
              <h5>
                How to Use Rails Backend with React Frontend
              </h5>
              <p>
              Rails is a great tool for writing an app from the bottom to the top.
               It’s MVC pattern is easy to grasp and can be very useful for separating
              the concerns. It has a lot of gems on top of each other to make the framework’s
               writing experience easier. Those gems and their duties is another topic, and I’ll
                write about them in another article. But when it comes to the frontend, I am not
                 a big fan of the Rails
              </p>
              <div className="d-flex mt-5 py-2 flex-wrap">
                <p className="mx-2 bg-info rounded labels pt-2 px-2">
                  Rails
                </p>
                <p className="mx-2 bg-info rounded labels pt-2 px-2">Rails API</p>
                <p className="mx-2 bg-info rounded labels pt-2 px-2">React</p>
              </div>
              <div className="order-3">
                <a
                  href="https://sercanuygur.medium.com/how-to-use-rails-backend-with-react-frontend-8cc81302eb63"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light btn btn-success mx-2 mb-4 button-article"
                >
                  See The Article
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-12 order-1 shadow">
              <img src="/rails.jpeg" alt="puzzle" className="w-100" />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-12 heading order-2">
              <h5>
                Teach Yourself How to Work With Bootstrap 4 in Ten Minutes or
                Less
              </h5>
              <p>
                “Bootstrap is a free and open-source CSS framework directed at
                responsive, mobile-first front-end web development. It contains
                CSS- and (optionally) JavaScript-based design templates for
                typography, forms, buttons, navigation, and other interface
                components.”  In this tutorial based article, you can learn how
                to setup Bootstrap 4 and use it with ease.
              </p>
              <div className="d-flex mt-5 py-2 flex-wrap">
                <p className="mx-2 bg-info rounded labels pt-2 px-2">
                  Bootstrap
                </p>
                <p className="mx-2 bg-info rounded labels pt-2 px-2">SCSS</p>
                <p className="mx-2 bg-info rounded labels pt-2 px-2">Npm</p>
                <p className="mx-2 bg-info rounded labels pt-2 px-2">Flexbox</p>
              </div>
              <div className="order-3">
                <a
                  href="https://hackernoon.com/teach-yourself-how-to-work-with-bootstrap-4-in-ten-minutes-or-less-ok4o3u09"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light btn btn-success mx-2 mb-4 button-article"
                >
                  See The Article
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-12 order-1 shadow">
              <img src="/Bootstrap4.png" alt="Easy-Pay" className="w-100" />
            </div>
          </div>
        </div>
      </article>
      <article className="text-light mb-2 article-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-12 heading order-2">
              <h5>Everything You Need to Know About Bootstrap 5</h5>
              <p>
                "Bootstrap is a powerful front-end library, that gives you the
                power of quick design and responsive mobile-first site layout.
                It lays on top of the 12 grid system and it has extensive
                pre-built components." In this article, you can see the
                difference between Bootstrap 4 and 5 and understand the
                important changes that happened.
              </p>
              <div className="d-flex mt-5 py-2">
                <p className="mx-2 bg-info rounded labels pt-2 px-2">
                  Bootstrap
                </p>
                <p className="mx-2 bg-info rounded labels pt-2 px-2">
                  CSS, SCSS
                </p>
                <p className="mx-2 bg-info rounded labels pt-2 px-2">Jquery</p>
              </div>
              <div className="order-3">
                <a
                  href="https://hackernoon.com/everything-you-need-to-know-about-bootstrap-5-yf423tf0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light btn btn-success mx-2 mb-4 button-article"
                >
                  See The Article
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-12 order-1 shadow">
              <img
                src="/Bootstrap5.png"
                alt="Easy-Pay"
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </article>
      <article className="text-light mb-2 article-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-12 heading order-2">
              <h5>A Simple Guide for CSS Animations</h5>
              <p>
                "Animations are very useful tools to make pages more appealing.
                I would like to start with what are animations, give some
                supplementary information, and give some animation syntax
                examples." In this article, you can see some simple examples of
                CSS animations and learn why they are important?
              </p>
              <div className="d-flex mt-5 py-2">
                <p className="mx-2 bg-info rounded labels pt-2 px-2">
                  CSS Animations
                </p>
                <p className="mx-2 bg-info rounded labels pt-2 px-2">
                  CSS, SCSS
                </p>
              </div>
              <div className="order-3">
                <a
                  href="https://hackernoon.com/a-simple-guide-for-css-animations-6a363uby"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light btn btn-success mx-2 mb-4 button-article"
                >
                  See The Article
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-12 order-1 shadow">
              <img src="/animations.jpeg" alt="Easy-Pay" className="w-100" />
            </div>
          </div>
        </div>
      </article>
      <footer className="my-footer2">
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
};

export default Publications;
