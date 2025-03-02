import React from "react";
import { Link } from "react-router-dom";

const PortfolioItems = ({ item }) => {
  return (
    <div className="portfolio__card" key={item.id}>
      <img src={item.image} alt={item.title} className="portfolio__img" />
      <h3 className="portfolio__title">{item.title}</h3>
      <Link to={`/portfolio/${item.id}`} className="portfolio__button">
        Detail <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
      </Link>
    </div>
  );
};

export default PortfolioItems;
