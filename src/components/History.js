import React from "react";

const History = () => {
  return (
    <section id="history" className="history sections">
      <div className="container">
        <div className="row">
          <div className="main_history">
            <div className="col-sm-6">
              <div className="single_history_img">
                <img src="/assets/images/stab1.png" alt="History" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="single_history_content">
                <h2>Company Emphasize</h2>
                <p>
                  이 부분에는 회사에 대해서 강조하고 싶은 내용을 넣으시면 됩니다.
                </p>
                <a href="#" className="btn btn-lg">
                  Go to page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
