import React from "react";
import img_options from "../img/options.png";
import img_profile from "../img/profile.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="pinkmail">pinkmail</div>
        <div className="pimages">pimages</div>
        <div className="menu">
          <img src={img_options} alt="options" className="options" />
        </div>
        <div className="profile-pic">
          <img src={img_profile} alt="profile" className="profile" />
        </div>
      </div>
      <style jsx>
        {`
          .navbar {
            font-size: 12pt;
            font-weight: 400;
            padding-bottom: 40vh;
            display: flex;
            justify-content: flex-end;
          }

          .options {
            height: 25px;
            padding: 10px;
          }

          .profile {
            height: 27px;
            padding: 10px;
          }

          .pinkmail {
            padding: 10px;
          }

          .pimages {
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
