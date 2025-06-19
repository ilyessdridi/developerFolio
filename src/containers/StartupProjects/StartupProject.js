import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

export default function StartupProject() {
  const [showDemo, setShowDemo] = useState(false);
  const [demoVideo, setDemoVideo] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({}); // Track current image index for each project

  function openUrlInNewTab(url) {
    if (!url) return;
    window.open(url, "_blank").focus();
  }

  function handleViewDemo(video) {
    setDemoVideo(video);
    setShowDemo(true);
  }

  const handlePrevImage = projectIndex => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]:
        (prev[projectIndex] || 0) === 0
          ? bigProjects.projects[projectIndex].images.length - 1
          : (prev[projectIndex] || 0) - 1
    }));
  };

  const handleNextImage = projectIndex => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]:
        (prev[projectIndex] || 0) ===
        bigProjects.projects[projectIndex].images.length - 1
          ? 0
          : (prev[projectIndex] || 0) + 1
    }));
  };

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) return null;

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
            {bigProjects.projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {project.images && project.images.length > 0 && (
                  <div className="project-image-container">
                    <div className="project-image">
                      <img
                        src={project.images[currentImageIndex[i] || 0]}
                        alt={project.projectName}
                        className="card-image"
                      />
                    </div>
                    {project.images.length > 1 && (
                      <>
                        <div
                          className="nav-arrow left-arrow"
                          onClick={() => handlePrevImage(i)}
                        >
                          <FaArrowLeft />
                        </div>
                        <div
                          className="nav-arrow right-arrow"
                          onClick={() => handleNextImage(i)}
                        >
                          <FaArrowRight />
                        </div>
                      </>
                    )}
                  </div>
                )}
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
                  {project.footerLink && (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, idx) => {
                        if (link.name === "View Demo" && project.demoVideo) {
                          return (
                            <span
                              key={idx}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              style={{cursor: "pointer"}}
                              onClick={() => handleViewDemo(project.demoVideo)}
                            >
                              {link.name}
                            </span>
                          );
                        }
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Demo Video Modal - keep existing */} 
        {
   /* Demo Video Modal */
 }
 {
   showDemo && demoVideo && (
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
   )
 }

        
      </div>
    </Fade>
  );
}

//  {
//    /* Demo Video Modal */
//  }
//  {
//    showDemo && demoVideo && (
//      <div
//        className="demo-modal"
//        style={{
//          position: "fixed",
//          top: 0,
//          left: 0,
//          right: 0,
//          bottom: 0,
//          background: "rgba(0,0,0,0.7)",
//          display: "flex",
//          alignItems: "center",
//          justifyContent: "center",
//          zIndex: 9999
//        }}
//      >
//        <div
//          style={{
//            background: "#fff",
//            padding: 20,
//            borderRadius: 8,
//            maxWidth: 500,
//            width: "90%",
//            maxHeight: "80vh",
//            display: "flex",
//            flexDirection: "column",
//            alignItems: "center",
//            overflowY: "auto"
//          }}
//        >
//          <video
//            src={demoVideo}
//            controls
//            style={{
//              width: "100%",
//              maxHeight: "60vh",
//              borderRadius: "8px"
//            }}
//          />
//          <button
//            onClick={() => setShowDemo(false)}
//            style={{
//              marginTop: 16,
//              padding: "8px 24px",
//              borderRadius: 5,
//              border: "none",
//              background: "#007bff",
//              color: "#fff",
//              cursor: "pointer"
//            }}
//          >
//            Close
//          </button>
//        </div>
//      </div>
//    );
//  }
