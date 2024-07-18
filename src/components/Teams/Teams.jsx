import React from "react";
import "react-modal-video/css/modal-video.css";
import UserData from "../../data/user.json";

const Teams = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);

  return (
    <section
      id="team"
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
          {UserData.map((user, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="item text-center md-mb50">
                <div className="img">
                  <img src={user.image} alt={user.name} />
                </div>
                <div className="info">
                  <h5>
                    <a href="#">{user.name}</a>
                  </h5>
                  <p>{user.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </section>
  );
};

export default Teams;