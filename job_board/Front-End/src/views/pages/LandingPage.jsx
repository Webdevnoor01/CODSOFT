// react-icons
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn, CiBullhorn } from "react-icons/ci";
import { MdOutlineDesignServices, MdBusinessCenter } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { FaMoneyBillTrendUp, FaPeopleLine } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsCode } from "react-icons/bs";

// custome & reusable components
import Container from "../../components/container";
import { useState } from "react";
import Button from "../../components/ui/button";
import Card from "../../components/landing-page/card";

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

      <main className="main">
        <section role="section" className="main__hero-section">
          <Container classes={"flex-between-center"}>
            <div className="main__content-section">
              <div className="main__content-container">
                <h1 className="main__heading">
                  <span>Discover&nbsp;</span>
                  <span>more than </span>

                  <span className="main__heading-highlight"> 5000+ jobs </span>
                </h1>

                <p className="main__para">
                  Great platform for the job seeker that searching for a new
                  career heighest and passionate about startups
                </p>
              </div>

              <div className="main__search-section">
                <div className="main__input-container">
                  <AiOutlineSearch className="main__input-icon" />
                  <input
                    className="main__input"
                    type="text"
                    placeholder="Job title of keyword"
                  />
                </div>

                <div className="main__select-container">
                  <CiLocationOn className="main__input-icon" />
                  <select className="main__select" name="location" value="">
                    <option value="">Choose your location</option>
                    <option value="india">India</option>
                    <option value="uk">United Kindomg</option>
                  </select>
                </div>

                <div className="main__button-container">
                  <Button btnTxt={"search my job"} />
                </div>
              </div>

              <div className="main__keyword-section">
                <span className="main__keyword-heading">Popular: </span>
                <div className="main__kaywords">
                  <span className="main__keyword">Web Developer</span>
                  <span className="main__keyword">Front-End developer</span>
                  <span className="main__keyword">Android Developer</span>
                  <span className="main__keyword">React Developer</span>
                  <span className="main__keyword">Java Developer</span>
                </div>
              </div>
            </div>

            <div className="main__media-section">
              <div className="main__image-container">
                <img
                  src="../../images/landin-page/hero-img.png"
                  alt=""
                  className="main__image"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="main__category-section">
          <Container>
            <div className="main__category-heading-container">
              <h2 className="main__category-heading">
                Explore by{" "}
                <span className="main__category-heading-highlight">
                  &nbsp;Category
                </span>
              </h2>

              <div className="main__category-container">
                <Card
                  Icon={MdOutlineDesignServices}
                  title={"Designs"}
                  jobs={300}
                />
                <Card
                  Icon={MdOutlineDesignServices}
                  title={"Designs"}
                  jobs={300}
                />
                <Card
                  Icon={MdOutlineDesignServices}
                  title={"Designs"}
                  jobs={300}
                />
                <Card
                  Icon={MdOutlineDesignServices}
                  title={"Designs"}
                  jobs={300}
                />
                <Card
                  Icon={MdOutlineDesignServices}
                  title={"Designs"}
                  jobs={300}
                />
                <Card
                  Icon={MdOutlineDesignServices}
                  title={"Designs"}
                  jobs={300}
                />
                <Card
                  Icon={MdOutlineDesignServices}
                  title={"Designs"}
                  jobs={300}
                />
                <Card
                  Icon={MdOutlineDesignServices}
                  title={"Designs"}
                  jobs={300}
                />
                
              </div>
            </div>
          </Container>
        </section>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default LandingPage;
