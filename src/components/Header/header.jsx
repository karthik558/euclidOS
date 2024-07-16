import React from "react";

const Index = () => {
  return (
    <section id="home">
      <header className="mobile-app valign">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="caption">
                <h1 className="mb-20">
                  Euclidean Elegance for Android
                </h1>
                <p>
                  Discover EuclidOS: a feature-rich, visually stunning custom firmware built on the Android Open Source Project.
                </p>
                <div className="butons mt-40">
                  <a href="download" className="butn-gr rounded buton">
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="img">
                <img src="/img/header-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Index;
