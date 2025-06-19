/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import "bootstrap-icons/font/bootstrap-icons.css";




// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "ilyess dridi",
  title: "Hi all, I'm ilyess",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ilyessdridi",
  linkedin: "https://www.linkedin.com/in/ilyess-dridi-16642425b/",
  gmail: "ilyessdridi37@gmail.com",
  facebook: "https://www.facebook.com/ilyess.dridi.777", 
  instagram:"https://www.instagram.com/ilyess.dridi/",
  twitter:"https://x.com/dridi_ilyess",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / Digital Ocean"
    )
  ],

  // Updated to use Devicon icons
  // ...existing code...
  softwareSkills: [
    // 1. Frameworks/Libraries
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "devicon-react-original colored"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "devicon-nextjs-original colored"
    },

    {
      skillName: "Flutter",
      fontAwesomeClassname: "devicon-flutter-plain colored"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "devicon-react-original colored"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "devicon-nodejs-plain colored"
    },
    // Same as React
    {
      skillName: "Express.js",
      fontAwesomeClassname: "devicon-express-original colored"
    },
    {
      skillName: "Fastify",
      fontAwesomeClassname: "devicon-nodejs-plain colored"
    }, // Fallback to Node.js
    {
      skillName: "Material UI",
      fontAwesomeClassname: "devicon-materialui-plain colored"
    },

    // 2. Databases
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain colored"
    },
    {skillName: "SQL", fontAwesomeClassname: "devicon-mysql-plain colored"},
    {
      skillName: "Firebase",
      fontAwesomeClassname: "devicon-firebase-plain colored"
    },

    // 3. CSS/Styling
    {skillName: "CSS3", fontAwesomeClassname: "devicon-css3-plain colored"},
    {skillName: "SASS", fontAwesomeClassname: "devicon-sass-original colored"},

    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "devicon-bootstrap-plain colored"
    },

    // 4. Languages
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain colored"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain colored"
    },
    {skillName: "Swift", fontAwesomeClassname: "devicon-swift-plain colored"},
    {skillName: "PHP", fontAwesomeClassname: "devicon-php-plain colored"},
    {skillName: "C++", fontAwesomeClassname: "devicon-cplusplus-plain colored"},
    {skillName: "C", fontAwesomeClassname: "devicon-c-plain colored"},

    // 5. Other Tools/Platforms
    {skillName: "HTML5", fontAwesomeClassname: "devicon-html5-plain colored"},

    {
      skillName: "npm",
      fontAwesomeClassname: "devicon-npm-original-wordmark colored"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "devicon-amazonwebservices-original colored"
    },
    {skillName: "Docker", fontAwesomeClassname: "devicon-docker-plain colored"},
    {
      skillName: "GitHub",
      fontAwesomeClassname: "devicon-github-original colored"
    },
    {
      skillName: "JWT",
      fontAwesomeClassname: "devicon-javascript-plain colored"
    }, // No JWT icon; JS is symbolic
    {
      skillName: "Prisma",
      fontAwesomeClassname: "devicon-prisma-original colored"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "devicon-tailwindcss-original"
    }
  ],
  // ...existing code...
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Esprit",
      logo: require("./assets/images/esprit.jpeg"),
      subHeader: "Master of Science in Computer Science",
      
    },
    {
      schoolName: "ReBootKamp(RBK)",
      logo: require("./assets/images/rbk.png"),
      subHeader: "Full Stack web /mobile developer certificate",
     
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "78%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      images: [
        // Changed from 'image' to 'images' array
        require("./assets/images/firstPage_wl.png"),
        require("./assets/images/signup.png"),
        require("./assets/images/home_wl.png"),
        require("./assets/images/sideBar_wl.png"),
        require("./assets/images/profile_wl.png"),
        require("./assets/images/services_wl.png"),
        require("./assets/images/project_wl.png"),
        require("./assets/images/events_wl.png"),
        require("./assets/images/setting1_wl.png"),
        require("./assets/images/notification.png"),
        require("./assets/images/profile2.png"),
        require("./assets/images/projects2.png"),
      ],
      projectName: "WeeLance",
      projectDesc:
        "WeeLance—your go-to freelance platform for effortless job matching and collaboration.",
      demoVideo: require("./assets/vidioes/weelance.mp4"),
      footerLink: [
        {
          name: "View Demo"
        }
      ]
    },
    {
      images: [
        // Changed from 'image' to 'images' array
        require("./assets/images/nextuLogo.webp"),
        require("./assets/images/signup.png") // Add more images as needed
      ],
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216 29873163",
  email_address: "ilyessdridi37@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
