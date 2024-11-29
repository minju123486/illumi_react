import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio sections">
      <div className="container-fluid">
        <div className="row">
          <div className="main_portfolio">
            <div className="col-sm-12">
              <div className="head_title text-center">
                <h2>PRODUCT</h2>
                <div className="subtitle">제품 설명 간단히 적으시면 됩니다.</div>
                <div className="separator"></div>
              </div>
            </div>
            <div className="col-sm-12 project-container">
              <div className="col-md-3 col-sm-6 project-box">
                <img src="/assets/images/illumi_img/pro1.png" alt="Product 1" />
                <h3>Product 1</h3>
                <p>Description</p>
              </div>
              <div className="col-md-3 col-sm-6 project-box">
                <img src="/assets/images/illumi_img/pro2.png" alt="Product 2" />
                <h3>Product 2</h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
