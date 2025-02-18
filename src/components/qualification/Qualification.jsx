import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor of International Relations
                </h3>
                <span className="qualification__subtitle">
                  Universitas Pembangunan Nasional Veteran Jakarta
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jul 2021 - Jul 2025
                  (Expected)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Full Stack Software Engineering
                </h3>
                <span className="qualification__subtitle">RevoU Course</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jan 2024 - Aug 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Data & Software Engineering
                </h3>
                <span className="qualification__subtitle">
                  RevoU Tech Academy X Kampus Merdeka
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 - Dec 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  High School Diploma in Accounting
                </h3>
                <span className="qualification__subtitle">
                  SMK Negeri 8 Jakarta
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jun 2018 - Jun 2021
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Laundry Attendant - Part Time
                </h3>
                <span className="qualification__subtitle">
                  Yopie Salon FX Sudirman
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Mar 2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Usher (Upper Tribune) - Freelance
                </h3>
                <span className="qualification__subtitle">
                  The Dream Show 3 (NCT Dream) 2024
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> May 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Guest Room Division - Freelance
                </h3>
                <span className="qualification__subtitle">
                  Indonesia Comic Con 2023
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Nov 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bar Server - Part Time</h3>
                <span className="qualification__subtitle">
                  Vol. Bottle Shop & Bar
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2023 - Nov 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Crew (Ticket Checker) - Freelance
                </h3>
                <span className="qualification__subtitle">
                  SM TOWN LIVE 2023
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Staff of Administrative - Internship
                </h3>
                <span className="qualification__subtitle">
                  PT. Tunas Ridean Tbk.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jan 2020 - Mar 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
