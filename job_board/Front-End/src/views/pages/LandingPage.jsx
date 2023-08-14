// react-icons
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

// custome & reusable components
import Container from "../../components/container";
import { useState } from "react";
import Button from "../../components/ui/button";

const LandingPage = () => {
  const [toggleVisibility, setToggleVisibility] = useState("hide");

  const handleToggleVisibility = () => {
    setToggleVisibility(toggleVisibility === "show" ? "hide" : "show");
  };
  return (
    <>
      <header className="header">
        <Container>
          {/* Navigation Bar */}
          <nav className="header__nav">
            {/*  logo section */}
            <div className="header__logo-section">
              <div className="header__logo-container">
                <img
                  src="./images/logo.png"
                  alt="header__logo"
                  className="logo"
                />
              </div>
              <span className="header__logo-txt">TechJob</span>
            </div>

            {/*  toggle menu section */}
            <div
              className="header__hamberger-section"
              role="button"
              onClick={handleToggleVisibility}
            >
              <BiMenuAltLeft className="header__hamberger" />
            </div>

            {/*  menu section */}
            <div className={`header__menu-section ${toggleVisibility} `}>
              <ul className="header__menu-container">
                <li className="header__menu">
                  <a href="#">Find Job</a>
                </li>
                <li className="header__menu">
                  <a href="#">Browse Compaby</a>
                </li>
              </ul>

              {/* Registration section */}

              <div className="header__registration-section">
                <div className="header__login-container">
                  <Button isLink={true} to={"/login"} btnTxt={"Login"} />
                </div>
                <div className="header__signup-container">
                  <Button
                    isLink={true}
                    to={"/login"}
                    btnTxt={"Sign Up"}
                    bg={"#ffffff"}
                    color={"#0d99ff"}
                  />
                </div>
              </div>
            </div>
          </nav>
        </Container>
      </header>

      <main>
        <Container>
          <div className="main__content-section">
              <h1 className="main__heading">
                Discover more than 
                <span className="main__heading-highlight" > 5000+ jobs </span>
              </h1>

              <p className="main__para">
                Great platform for the job seeker that searching for a new career heighest and passionate about startups
              </p>

              <div className="main__search-section">
                <div className="main__input-container">
                  <AiOutlineSearch />
                  <input type="text" placeholder="Job title of keyword" />
                </div>
                
              </div>
          </div>
          <div className="main__media-section"></div>
        </Container>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default LandingPage;
