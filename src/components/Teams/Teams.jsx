import React from "react";
import "react-modal-video/css/modal-video.css";

const Teams = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section id="team"
      className="team-vid section-padding bg-dark pt-0"
      data-overlay-dark="0"
    >
      <div className="container">
        <div className="row mb-15">
          <div className="col-5"></div>
        </div>

        <div className="row justify-content-center mt-100">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Our Passionate Team
                <span className="right"></span>
              </h6>
              <h2>Passionate team, dedicated to excellence</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="img">
                <img src="/img/team/1.png" alt="" />
              </div>
              <div className="info">
                <h5><a href="#">Mrinmoy Dey</a></h5>
                <p>Lead Developer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="img">
                <img src="/img/team/2.png" alt="" />
              </div>
              <div className="info">
                <h5><a href="#">Aditya Pratap Singh</a></h5>
                <p>Source Developer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center sm-mb50">
              <div className="img">
                <img src="/img/team/3.png" alt="" />
              </div>
              <div className="info">
                <h5><a href="#">Arijit Saha</a></h5>
                <p>Core Member</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center sm-mb50">
              <div className="img">
                <img src="/img/team/4.png" alt="" />
              </div>
              <div className="info">
                <h5><a href="https://karthiklal.in">Karthik Lal</a></h5>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="img">
                <img src="/img/team/5.png" alt="" />
              </div>
              <div className="info">
                <h5><a href="#">Jeevesh V</a></h5>
                <p>Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="img">
                <img src="/img/team/6.png" alt="" />
              </div>
              <div className="info">
                <h5><a href="#">Naoko Shoto</a></h5>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </section>
  );
};

export default Teams;
