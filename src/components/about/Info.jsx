import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Lorem, ipsum dolor.</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">Lorem.</h3>
        <span className="about__subtitle">Lorem, ipsum dolor.</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Lorem.</h3>
        <span className="about__subtitle">Lorem, ipsum dolor.</span>
      </div>
    </div>
  );
};

export default Info;
