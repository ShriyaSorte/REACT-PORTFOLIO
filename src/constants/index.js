import fitness from "../assets/projects/fitness.jpeg";
import hospital from "../assets/projects/hospital.jpeg";
import food from "../assets/projects/food.jpeg";
import ecommerce from "../assets/projects/ecommerce.jpeg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Full-Stack development student based in Pune, India. I am an Information Technology graduate from RTMNU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Whether I'm creating intricate APIs, streamlining user interfaces, or resolving difficult issues, my goal is to produce flawless user experiences and high-quality code. I am able to contribute creative ideas to the projects I work on because of my passion for lifelong learning, which keeps me abreast of the newest developments in the industry and technology.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer Intern",
    company: "Scalefull Technologies LLP.",
    description: `Created RESTful APIs using Node.js and Express.js to handle CRUD operations, authentication, and authorization. Carried out simple front-end tasks with JavaScript, HTML, CSS, and Bootstrap.`,
    technologies: ["Javascript", "React.js", "Express.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "System Engineer",
    company: "Atos Global IT Solutions and Services",
    description: ` Contributed to the Support background team, where my primary responsibility was debugging Windows OS issues. Provided help to end customers in several areas with technical support, fixing problems with hardware, software, and network connectivity. Managed backup and recovery procedures, making sure vital information was consistently backed up and easily restored in case of system failure or data loss.`,
    technologies: ["Windows Administrator", "SNOW", "Troubleshooting"],
  },
  {
    year: "2022 - 2023",
    role: "Summer Intern",
    company: "Cojag Smart Technology Pvt. Ltd. ",
    description: `Helped with the creation and upkeep of the business's HTML, CSS, and JavaScript website. Used responsive design methods to help improve user interface (UI) and user experience (UX). Helped collect and prepare data from multiple sources, such as database searches and web scraping. Data was cleaned and arranged to guarantee consistency and accuracy. Utilized Python and Pandas to analyze datasets and generate actionable insights. Created visualizations using Matplotlib and Seaborn to present findings to the team.`,
    technologies: ["Python", "HTML", "CSS", "Jupyter Notebook"],
  },
  {
    year: "2021 - 2021",
    role: "Summer Intern",
    company: "Bennett University",
    description: `During this internship, I worked on AI/ML projects and learned the basics of Python. This internship allowed me to apply theoretical knowledge in a practical setting, develop key technical skills, and enhance my problem solving and teamwork abilities in a dynamic and collaborative environment.`,
    technologies: ["Python", "Machine Learning", "AI"],
  },
];

export const PROJECTS = [
  {
    title: "Fitness Tracker System",
    image: fitness,
    description:
      "A fitness tracker API system is a backend service made to handle and supply fitness-related data to different client applications. Fitness tracking apps with features like user administration, workout tracking, diet monitoring, and more by interacting with the fitness data programmatically using this API.",
    technologies: ["Express.js", "Node.js", "MongoDB"],
  },
  {
    title: "Hospital Appointment System",
    image: hospital,
    description:
      "A Hospital Appointment API System is a backend service that makes it easier for doctors, administrative staff, and patients to schedule, manage, and keep track of hospital appointments. Through the use of this API, hospital data can be accessed and used by client applications streamlining and improving the appointment process.",
    technologies: ["Express.js", "Node.js", "MongoDB"],
  },
  {
    title: "Food Delivery Website",
    image: food,
    description:
      "A React-built front-end application for food delivery lets users browse restaurants, order online, check menus, etc. With its adaptable design and real-time updates, the app offers a flawless user experience that makes ordering food from preferred restaurants simple for customers.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "A complete online shopping solution is offered by this eCommerce platform with a React frontend and a robust backend, allowing customers to explore products, manage their carts, and make purchases. Order processing, payment transactions, user authentication, and data administration are all handled by the backend, while the frontend provides a user interface that is responsive and easy to use.",
    technologies: ["React", "Node.js", "Express.js", "mongoDB"],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra, India.",
  phoneNo: "+91 - 8551929956",
  email: "shriyasorte2000@gmail.com",
};
