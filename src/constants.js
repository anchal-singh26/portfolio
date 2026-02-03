import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import javaLogo from './assets/tech_logo/java.png';



import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';

// Experience Section Logo's
import Ecommerceproj from './assets/company_logo/ecomlogo.png';
import jobsync from './assets/company_logo/job-sync.jpg';
import doctorPortal from './assets/company_logo/doctor-patient-logo.jpg';
import flipkartClone from './assets/company_logo/ecomlogo.png';
import keysoftware from './assets/company_logo/keysoftware.jpg';

// Education Section Logo's
import cimelogo from './assets/education_logo/cimelogo.jpg';
import govlogo from './assets/education_logo/govlogo.jpg';
import rsclogo from './assets/education_logo/rsclogo.png';
import vsklogo from './assets/education_logo/vsklogo.jpg';


//profession-experience Logo's
import nareshLogo from './assets/Professionalexp-logo/naresh_i_technologies_logo.jpg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', logo: javascriptLogo }

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo }
    ],
  },
];

export const experiences = [

  {
    id: 1,
    img: keysoftware,
    role: "Sense of Space App",
    company: "Key Software Services Pvt. Ltd.",
    date: "January 2024",
    desc: `Developed and optimized the frontend of a cross-platform app using React.js. Improved load speed and user interaction by 25% through performance tuning. Implemented Redux for scalable state management, reducing UI-related bugs by 30%. Integrated Firebase Cloud Messaging (FCM) for real-time push notifications, boosting user engagement. Worked closely with backend developers to integrate RESTful APIs and real-time notification systems using Node.js and Express.js, improving data sync efficiency by 20%.`,
    skills: [
      "React.js",
      "Redux",
      "Firebase Cloud Messaging (FCM)",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "State Management",
      "UI Optimization"
    ],
  },
  {
    id: 2,
    img: keysoftware,
    role: "Employee Management System",
    company: "Key Software Services Pvt. Ltd.",
    date: "January 2024",
    desc: `Led frontend development using React.js for the Employee Management System, enhancing UI responsiveness and improving user retention by 15%. Implemented Redux-based centralized state management, increasing codebase scalability and reducing crashes by 25%. Integrated frontend with RESTful APIs, improving data processing speed by 30% and ensuring seamless communication between UI and backend systems.`,
    skills: [
      "React.js",
      "Redux",
      "RESTful APIs",
      "State Management",
      "UI Optimization",
      "Responsive Design",
      "Performance Tuning",
    ],
  },
  {
    id: 3,
    img: doctorPortal,
    role: "Doctor-Patient Portal",
    company: "Academic Final Year Project",
    date: "December 2024",
    desc: `Designed and developed a hospital management web-based Doctor-Patient Portal using Java. The system supported patient registration, appointment scheduling, and multi-role login (admin, doctor, patient), reducing manual onboarding time by 40%. Integrated modules like doctor profile management, patient medical history, and scheduling. Led a 4-member team, coordinated feature integration, and ensured reliability using JUnit testing and validation procedures. Emphasized OOP principles and clean architecture for scalability and security.`,
    skills: [
      "Java",
      "JDBC",
      "MySQL",
      "Servlets",
      "JSP",
      "HTML",
      "CSS",
      "JUnit",
      "MVC Architecture"
    ],
  },
  {
    id: 4,
    img: Ecommerceproj,
    role: "E-Commerce Web Application",
    company: "Personal Project (Naresh i Technologies Association)",
    desc: `Designed and developed a fully responsive e-commerce shopping platform using HTML, CSS, and JavaScript. Built key features including product listings, filtering, shopping cart functionality, and intuitive UI navigation. Ensured mobile responsiveness and cross-browser compatibility using Bootstrap. Implemented AJAX and jQuery for seamless content updates and user experience. Future roadmap includes full backend integration using the MERN Stack (MongoDB, Express.js, React, Node.js) to support authentication, database management, and order processing.`,
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "AJAX",
      "jQuery",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "MERN Stack (Planned)"
    ],
  },
  {
    id: 5,
    img: jobsync,
    role: "Job Sync Portal",
    company: "Group Project (Naresh i Technologies Association)",
    desc: `Contributed to the development of Job Sync, a modern job search and application portal. Focused on building responsive, accessible, and intuitive UI/UX using React and Tailwind CSS. Implemented key features such as job listings, saved jobs, application workflows, and user profile management. Employed a component-based architecture and React Router for seamless navigation. Collaborated with the team to integrate backend services using Node.js, Express.js, and MongoDB. Applied Redux for scalable state management and ensured code maintainability through Git-based version control.`,
    skills: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Router",
      "RESTful APIs",
      "JavaScript",
      "Responsive Web Design",
      "State Management",
      "Component-Based Architecture",
      "Git"
    ],
  },

  {
    id: 6,
    img: flipkartClone,
    role: "Flipkart Clone",
    company: "Personal Project",
    desc: `Developed a full-stack e-commerce application inspired by Flipkart, featuring complete user workflows such as product browsing, authentication, cart management, and order placement. Designed a responsive and modern UI using React and Material UI. Implemented backend services using Node.js, Express.js, and MongoDB to handle user data, product listings, and order processing. Integrated JWT-based authentication and Redux for secure, scalable, and maintainable state management. Ensured smooth navigation and API integration through React Router and RESTful services.`,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
      "Redux",
      "JWT Authentication",
      "RESTful APIs",
      "React Router",
      "State Management",
      "Responsive Design",
      "Git"
    ],
  },

];
export const professionalExperience = [
  {
    id: 1,
    img: nareshLogo,
    role: "MERN Stack Intern",
    company: "Naresh i Technologies",
    date: "Oct 2024 · Internship",
    location: "Hyderabad, Telangana, India",
    desc: `Serving as a MERN Stack Intern with a strong focus on React.js for frontend development. Contributed to dynamic and responsive UI components, collaborated on full-stack applications using MongoDB, Express.js, React.js, and Node.js. Integrated RESTful APIs, enhanced user experience, and participated in Agile development processes. Gained hands-on experience with component-based architecture, state management, and version control using Git.`,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JavaScript",
      "HTML5",
      "CSS",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "Firebase",
      "SQL",
      "Git",
      "Agile"
    ],
  },
  {
    id: 2,
    img: keysoftware,
     role: 'Software Engineer',
  company: 'Key Software Services Pvt. Ltd.',
  date: 'Jan 2024 · Full-Time',
  location: 'Kurukshetra, Haryana, India · On-site',
desc: `Led frontend development using React.js and Redux to enhance UI responsiveness and user engagement. Implemented global state management with Redux Toolkit and integrated Firebase for authentication and real-time sync. Optimized RESTful API performance with Node.js and Express.js. Conducted code reviews and led team knowledge-sharing sessions to boost code quality and collaboration.`,
  skills: [
    'React.js',
    'Redux',
    'Redux Toolkit',
    'Firebase Authentication',
    'Firebase Cloud Messaging',
    'Node.js',
    'Express.js',
    'REST APIs',
    'Code Review',
    'Git',
  ],
  },
];


export const education = [
  {
    id: 0,
    img: cimelogo,
    school: "COLLEGE OF IT AND MANAGEMENT EDUCATION, BBSR",
    date: "Completed in 2024",
    grade: "CGPA: 7.71",
    desc: "Earned a Master of Computer Application (MCA), gaining advanced knowledge in software development and modern computing technologies.",
    degree: "Master of Computer Application (MCA)",
  },
  {
    id: 1,
    img: govlogo,
    school: "GOVT. WOMEN'S COLLEGE, KEONJHAR",
    date: "Completed in 2022",
    grade: "75.54%",
    desc: "Completed a Bachelor of Science in Computer Science with a strong foundation in programming and theoretical computing principles.",
    degree: "Bachelor of Science (Computer Science)",
  },
  {
    id: 2,
    img: rsclogo,
    school: "RAJDHANI H SCHOOL OF SCI, ARTS & COM, BBSR",
    date: "Completed in 2019",
    grade: "50%",
    desc: "Completed Higher Secondary (+2 Science) with focus on core science subjects including Physics, Chemistry, and Mathematics.",
    degree: "Higher Secondary (+2 Science)",
  },
  {
    id: 3,
    img: vsklogo,
    school: "VIVEKANANDA SHIKSHA KENDRA, BBSR",
    date: "Completed in 2017",
    grade: "55%",
    desc: "Completed Matriculation with a general education curriculum emphasizing mathematics, science, and language proficiency.",
    degree: "Matriculation",
  },
];
