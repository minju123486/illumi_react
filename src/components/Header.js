import React from "react";

const Header = () => {
  return (
    <header id="main_menu" className="header navbar-fixed-top">
      <div className="main_menu_bg">
        <div className="container">
          <div className="row">
            <div className="nave_menu">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#home">
                      <img
                        src="/assets/images/illumi_img/illumi_logo_re-removebg-preview.png"
                        alt="Illumi Logo"
                      />
                    </a>
                  </div>
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <a href="#home">HOME</a>
                      </li>
                      <li>
                        <a href="#feature">COMPANY</a>
                      </li>
                      <li>
                        <a href="#portfolio">PRODUCT</a>
                      </li>
                      <li>
                        <a href="#team">PROJECT</a>
                      </li>
                      <li>
                        <a href="#blog">CS CENTER</a>
                      </li>
                      <li>
                        <a href="#contact">CONTACT US</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
