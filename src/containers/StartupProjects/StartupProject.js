import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [showDemo, setShowDemo] = useState(false);
  const [demoVideo, setDemoVideo] = useState(null);

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  function handleViewDemo(video) {
    setDemoVideo(video);
    setShowDemo(true);
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, idx) => {
                          // If this is the View Demo button and demoVideo exists, show the popout
                          if (link.name === "View Demo" && project.demoVideo) {
                            return (
                              <span
                                key={idx}
                                className={
                                  isDark
                                    ? "dark-mode project-tag"
                                    : "project-tag"
                                }
                                style={{cursor: "pointer"}}
                                onClick={() =>
                                  handleViewDemo(project.demoVideo)
                                }
                              >
                                {link.name}
                              </span>
                            );
                          }
                          // Otherwise, open the link as usual
                          return (
                            <span
                              key={idx}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Demo Video Modal */}
        {showDemo && demoVideo && (
          <div
            className="demo-modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: 20,
                borderRadius: 8,
                maxWidth: 500,
                width: "90%",
                maxHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflowY: "auto"
              }}
            >
              <video
                src={demoVideo}
                controls
                style={{
                  width: "100%",
                  maxHeight: "60vh",
                  borderRadius: "8px"
                }}
              />
              <button
                onClick={() => setShowDemo(false)}
                style={{
                  marginTop: 16,
                  padding: "8px 24px",
                  borderRadius: 5,
                  border: "none",
                  background: "#007bff",
                  color: "#fff",
                  cursor: "pointer"
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}
