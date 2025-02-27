import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-devices about__icon"></i>
        <h3 className="about__title">Responsive & Modern UI</h3>
      </div>

      <div className="about__box">
        <i class="bx bxs-zap about__icon"></i>
        <h3 className="about__title">Optimized Performance</h3>
      </div>

      <div className="about__box">
        <i class="bx bx-run about__icon"></i>
        <h3 className="about__title">Always Improving</h3>
      </div>
    </div>
  );
};

export default Info;
