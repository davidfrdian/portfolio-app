import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import PortfolioItems from "./PortfolioItems";
import NoProjectImage from "../../../src/assets/NoProjectImage.png"

const Portfolios = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });

      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="portfolio__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`${
                active === index ? "active-portfolio" : ""
              } portfolio__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      {/* Project List */}
      <div className="portfolio__container container grid">
        {projects.length > 0 ? (
          projects.map((item) => <PortfolioItems item={item} key={item.id} />)
        ) : (
          <div className="portfolio__no-projects">
            <img src={NoProjectImage} alt="No projects" className="no-projects__img" />
            <p className="no-projects__text">No Projects Yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolios;
