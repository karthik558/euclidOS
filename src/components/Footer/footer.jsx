import React from "react";

const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item-clumn our md-mb50">
              <a href="#0" className="logo-brand mb-50">
                <img src="/img/logo/logo-footer.png" alt="" />
              </a>
              {/* <p>
                AOSP-based ROM with Pixel-like experience, enhanced performance, Google apps, and extra features.
              </p> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links md-mb50">
              <h5 className="title">Resources</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://github.com/euclidTeam/manifest">Access Source</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Blogs</a>
                </li>
                {/* <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Devices</a>
                </li> */}
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://github.com/euclid-Devices/official_devices/issues/new/choose">Maintainership ?</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="item-clumn links sm-mb50">
              <h5 className="title">Links</h5>
              <ul>
                {/* <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://crowdin.com/project/EuclidOS">Crowdin</a>
                </li> */}
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://t.me/euclidoschat">Support</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://t.me/euclidOSupdates">Channel</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links">
              <h5 className="title mb-30">Contact</h5>
              <div className="info">
                <span>Email Address</span>
                <h6>
                  <a href="mailto:support@euclidos.org">support@euclidos.org</a>
                </h6>
              </div>
              <div className="social mt-30">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://t.me/EuclidOS">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/euclidTeam/manifest">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p>
                  © 2024. Designed & Developed by{" "}
                  <a href="https://karthiklal.in">KARTHIK LAL.</a> All right
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </footer>
  );
};

export default Footer2;
