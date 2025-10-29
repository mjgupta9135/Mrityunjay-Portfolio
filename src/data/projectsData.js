import code from "../assets/png/Project/code.png";
import resume from "../assets/png/Project/resume.png";
import r2048 from "../assets/png/Project/2048.png";
import movie from "../assets/png/Project/movie.png";
import tata from "../assets/png/Project/tata.png";
import drivenest from "../assets/png/Project/drivenest.png";
import instaerase from "../assets/png/Project/instaerase.png";


export const projectsData = [
  {
  id: 2, // Assuming this is the next ID
  projectName: "DriveNest",
  projectDesc:
    "A full-stack cloud storage app using React, Spring Boot, and MongoDB. Features file upload/download, public/private sharing with secure links, Clerk authentication, and Razorpay subscription workflows.",
  tags: ["React.js", "Spring Boot", "MongoDB"],
  code: "https://github.com/mjgupta9135/DriveNest", // Assumed GitHub username from your other project
  demo: "https://prismatic-bombolone-5f6af4.netlify.app/", 
  image: drivenest, 
},
{
  id: 3, // Assuming this is the next ID
  projectName: "ClipDrop.ai",
  projectDesc:
    "A full-stack AI background remover app using React, Spring Boot, and MySQL. Features secure image upload, Clerk authentication, a credit-driven Razorpay subscription, and an AI workflow via the Clipdrop API.",
  tags: ["React.js", "Spring Boot", "MySQL"],
  code: "https://github.com/mjgupta9135/InstaErase.ai", // Assumed GitHub username and repo
  demo: "https://luminous-croissant-f69a7b.netlify.app/", // Add your live link here
  image: instaerase, // You will need to import this image variable
},
  {
    id: 1,
    projectName: "Tatanagar Treats",
    projectDesc:
      "Tatanagar Treats is a ReactJS-based food ordering website for Jamshedpur, integrating Swiggy API for real-time data and featuring an intuitive UI/UX with Tailwind CSS and Redux.",
    tags: ["React.JS", "Tailwind", "Swiggy API"],
    code: "https://github.com/mjgupta9135/Tatanagar-Treats",
    demo: "https://tatanagar-treats.web.app/",
    image: tata,
  },
  {
    id: 1,
    projectName: "MoviePedia",
    projectDesc:
      "A comprehensive movie and series database with millions of records, providing detailed information and easy access to extensive media content.",
    tags: ["React.JS", "SCSS", "TMDB API"],
    code: "https://github.com/mjgupta9135/MoviePedia",
    demo: "https://movie-pedia-mj.netlify.app/",
    image: movie,
  },
  {
    id: 1,
    projectName: "Byte Builder",
    projectDesc:
      "An intuitive online code editor allowing seamless execution and testing of code across various programming languages.",
    tags: ["React.JS", "Tailwind", "Monaco-Editor"],
    code: "https://github.com/mjgupta9135/Byte_Builders/",
    demo: "https://byte-builder.netlify.app",
    image: code,
  },
  {
    id: 2,
    projectName: "Resume Wizard",
    projectDesc:
      "A user-friendly tool for creating professional resumes quickly with customizable templates, easy editing, and PDF export.",
    tags: ["HTML", "CSS", "Javascript"],
    code: "https://github.com/mjgupta9135/Resume-Builder",
    demo: "https://resume-wizard-mj.netlify.app/",
    image: resume,
  },
  {
    id: 3,
    projectName: "2048 Game",
    projectDesc:
      "A fun and addictive puzzle game where players combine tiles to reach the 2048 tile. Simple yet challenging!",
    tags: ["HTML", "CSS", "Javascript"],
    code: "https://github.com/mjgupta9135/2048-Game",
    demo: "https://2048-mj.netlify.app/",
    image: r2048,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
