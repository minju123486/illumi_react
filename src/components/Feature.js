import React from "react";

const Feature = () => {
  return (
    <section id="feature" className="feature sections">
      <div className="container">
        <div className="row">
          <div className="main_feature text-center">
            <div className="head_title_company text-center">
              <h2>COMPANY</h2>
              <br />
              <div className="subtitle">
                여기에는 간단한 설명을 적으시면 될 것 같습니다.
              </div>
              <div className="separator"></div>
            </div>
            <div className="col-sm-3">
              <div className="single_feature">
                <img src="/assets/images/illumi_img/company1.jpg" alt="About Us" />
                <h4>About us</h4>
                <div className="separator3"></div>
                <p>주식회사 일루미는 <br /> Total lighting Solutions 회사입니다.</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single_feature">
                <img src="/assets/images/illumi_img/company2.jpg" alt="Organization" />
                <h4>Organization</h4>
                <div className="separator3"></div>
                <p>
                  최고의 품질과 최상의 서비스, <br /> 완벽한 기술력을 자랑합니다.
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single_feature">
                <img src="/assets/images/illumi_img/company3.jpg" alt="Results" />
                <h4>Result</h4>
                <div className="separator3"></div>
                <p>롯데 김해관광유통단지 조명기구 납품 등.</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single_feature">
                <img src="/assets/images/illumi_img/company4.jpg" alt="Location" />
                <h4>Location</h4>
                <div className="separator3"></div>
                <p>
                  서울시 성동구 성수일로 8길53 <br /> 캐슬프라자 702호
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
