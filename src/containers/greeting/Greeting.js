import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import profileImage from "../../assets/images/profileImage.jpg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  const styles = {
    mainContainer: {
      width: "100%",
      overflowX: "hidden"
    },
    greetingContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem",
      flexWrap: "wrap" // Allows items to stack on mobile
    },
    textSection: {
      flex: "1",
      minWidth: "300px", // Minimum width before wrapping
      padding: "1rem"
    },
    imageSection: {
      flex: "1",
      minWidth: "300px", // Minimum width before wrapping
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem"
    },
    profileContainer: {
      position: "relative",
      width: "100%",
      maxWidth: "400px",
      aspectRatio: "1/1"
    },
    profileImageWrapper: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      overflow: "hidden",
      border: isDark ? "4px solid #fff" : "4px solid #333",
      boxShadow: isDark
        ? "0 0 20px rgba(255, 255, 255, 0.3)"
        : "0 0 20px rgba(0, 0, 0, 0.2)"
    },
    profileImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    // Mobile-specific styles
    mobileStyles: {
      greetingContainer: {
        flexDirection: "column",
        padding: "1rem"
      },
      textSection: {
        width: "100%",
        padding: "0"
      },
      imageSection: {
        width: "100%",
        marginTop: "2rem"
      }
    }
  };

  // Check if mobile view
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={styles.mainContainer}>
      <Fade bottom duration={1000} distance="40px">
        <div className="greet-main" id="greeting">
          <div
            style={{
              ...styles.greetingContainer,
              ...(isMobile && styles.mobileStyles.greetingContainer)
            }}
          >
            <div
              style={{
                ...styles.textSection,
                ...(isMobile && styles.mobileStyles.textSection)
              }}
            >
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="Download my resume"
                    href={greeting.resumeLink}
                    newTab={true}
                  />
                )}
              </div>
            </div>

            <div
              style={{
                ...styles.imageSection,
                ...(isMobile && styles.mobileStyles.imageSection)
              }}
            >
              <div style={styles.profileContainer}>
                <div style={styles.profileImageWrapper}>
                  <img
                    src={profileImage}
                    alt="Profile"
                    style={styles.profileImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
