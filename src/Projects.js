import { Link } from "react-router-dom";

const Projetcs = () => (
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
    <article className="text-light mb-2 article-3 shadow-lg">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-12">
            <img
              src="/Screenshot1.png"
              alt="Easy-Pay"
              className="img img-fluid"
            />
          </div>
          <div className="col-xl-5 col-12 heading d-flex flex-column justify-content-center">
            <h5>Easy-Pay</h5>
            <p className="d-none d-md-block">
              You can create a user account, your own groups, and arrange your
              transactions. You can sign-in with GitHub or with a Name and
              Password.
            </p>
            <div className="d-none d-md-flex py-2 flex-wrap">
              <p className="mx-2 bg-info rounded labels pt-2 px-2">Ruby</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">Rails</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">Bootstrap</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">RSpec</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">CSS</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">HTML</p>
            </div>
            <div>
              <a
                href="https://easy-pay-sercan.herokuapp.com/"
                target="blank"
                rel="noreferrer"
                className="text-light btn btn-success mx-2 button-live"
              >
                Live Link
              </a>
              <a
                href="https://github.com/eypsrcnuygr/easy-pay-2"
                target="blank"
                rel="noreferrer"
                className="text-light btn btn-primary mx-2 button-github"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article className="text-light mb-2 article-3 shadow-lg">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-12">
            <img src="/Screenshot2.png" alt="Book" className="w-100" />
          </div>
          <div className="col-xl-5 col-12 heading d-flex flex-column justify-content-center">
            <h5>Book an Appointment</h5>
            <p className="d-none d-md-block">
              This is the frontend part of the Final Capstone project on
              Microverse curriculum. You can sign-up as a teacher and find
              students for yourself, or you can sign-up as a student and find
              suitable teachers in your interested areas.
            </p>
            <div className="d-none d-md-flex py-2 flex-wrap">
              <p className="mx-2 bg-info rounded labels pt-2 px-2">React</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">Redux</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">Rails</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">Bootstrap</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">SCSS</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">HTML</p>
            </div>
            <div>
              <a
                href="https://book-an-appointment-frontend.herokuapp.com/"
                target="blank"
                rel="noreferrer"
                className="text-light btn btn-success mx-2 button-live"
              >
                Live Link
              </a>
              <a
                href="https://github.com/eypsrcnuygr/book-an-appointmen-frontend"
                target="blank"
                rel="noreferrer"
                className="text-light btn btn-primary mx-2 button-github"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article className="text-light mb-2 article-3 shadow-lg">
      <div className="container">
        <div className="row h-50">
          <div className="col-xl-7 col-12 h-50">
            <img src="/Screenshot3.png" alt="Space" className="w-100" />
          </div>
          <div className="col-xl-5 col-12 heading d-flex flex-column justify-content-center">
            <h5>Space Shooter Game</h5>
            <p className="d-none d-md-block">
              This is a space shooter game built with JavaScript and Phaser.The
              aim is to collect all the stars as fast as you can without dying.
              Every star counts 10 points and the time amount that you've played
              will be removed from your total point. For more information please
              check the GitHub repo.
            </p>
            <div className="d-none d-md-flex py-2 flex-wrap">
              <p className="mx-2 bg-info rounded labels pt-2 px-2">
                JavaScript
              </p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">Phaser</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">WebPack</p>
              <p className="mx-2 bg-info rounded labels pt-2 px-2">Babel</p>
            </div>
            <div>
              <a
                href="https://sharp-lamport-8a5538.netlify.app/"
                target="blank"
                rel="noreferrer"
                className="text-light btn btn-success mx-2 button-live"
              >
                Live Link
              </a>
              <a
                href="https://github.com/eypsrcnuygr/shooter-game"
                target="blank"
                rel="noreferrer"
                className="text-light btn btn-primary mx-2 button-github"
              >
                GitHub Repo
              </a>
            </div>
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

export default Projetcs;
