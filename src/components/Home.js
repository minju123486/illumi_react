import React from "react";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="cg_background"></div>
      <div className="overlay">
        <div className="home_skew_border">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="main_home_slider text-center">
                  <div className="single_home_slider">
                    <div
                      className="main_home wow fadeInUp"
                      data-wow-duration="700ms"
                    >
                      <h1 style={{ fontSize: "3.5vw" }}>TOTAL LIGHTING SOLUTIONS</h1>
                      <div className="separator_m"></div>
                      <h3 style={{ fontSize: "1.5vw" }}>
                        HOTEL / COMMERCIAL / RESIDENCE / HOSPITAL
                      </h3>
                    </div>
                  </div>
                  <div className="single_home_slider">
                    <div
                      className="main_home wow fadeInUp"
                      data-wow-duration="700ms"
                    >
                      <h3>Our Clients Are Our First Priority</h3>
                      <h1>WELCOME TO BINO</h1>
                      <div className="separator"></div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="home_btn">
                        <a href="#" className="btn btn-lg m_t_10">
                          GET STARTED NOW
                        </a>
                        <a href="#" className="btn btn-default">
                          LEARN MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scrooldown">
            <a href="#feature">
              <img src="/assets/images/scroll.png" alt="Scroll" />
            </a>
            <span style={{ fontWeight: "bold", color: "white" }}>SCROLL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
