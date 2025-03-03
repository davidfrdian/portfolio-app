import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "./Data";

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="portfolio-detail">
      <h1 className="portfolio-detail__title">{project.title}</h1>

      <div className="portfolio-detail__tools">
        <p>
          <strong>Category: </strong>{" "}
          {project.category
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}
        </p>
        <p className="tools-icon">
          {project.tools.map((tool, index) => (
            <span key={index}>{tool.icon()}</span>
          ))}
        </p>
      </div>
      <div className="portfolio-detail-container">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="portfolio-detail__img"
          />
        </div>

        <div>
          <div className="portfolio-detail__content">
            <p style={{ whiteSpace: "pre-line" }}>
              <strong>
                Background <br />
              </strong>{" "}
              {project.background}
            </p>
          </div>

          {(project.github || project.link) && (
            <div className="portfolio-detail__links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-detail__link"
                >
                  <i className="bx bxl-github portfolio-detail__links-logo"></i>
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-detail__link"
                >
                  <i className="bx bx-link-external portfolio-detail__links-logo"></i>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <Link to="/" className="portfolio__back-button">
        Back to Portfolio{" "}
        <i className="bx bx-right-arrow-alt portfolio__back-button-icon"></i>
      </Link>
    </div>
  );
};

export default PortfolioDetail;
