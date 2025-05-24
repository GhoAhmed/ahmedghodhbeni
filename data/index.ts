export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently building an e-learning platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    sub: "COLO",
    title: "COLO: Intelligent Property Rental System",
    des: "Building a web application for apartment rentals using ASP.NET Core MVC. COLO provides machine learning models with ML.NET, offering features like recommendation systems, price prediction, and sentiment analysis.",
    img: "./colo.png",
    iconLists: [
      "./dot-net.svg",
      "./js.svg",
      "./html.svg",
      "./css.svg",
      "./ai.svg",
      "./ml.svg",
    ],
    link: "https://github.com/GhoAhmed/Colo",
  },
  {
    id: 2,
    sub: "KwikTek",
    title: "KwikTek - Smart Tech, Stronger Business",
    des: "Delivering cutting-edge AI solutions that empower businesses to thrive in an ever-evolving digital landscape. Specializing in custom AI development, machine learning models, and intelligent automation.",
    img: "./kwiktek.png",
    iconLists: ["./js.svg", "./html.svg", "./css.svg"],
    link: "https://sg-projects.site/",
  },
  {
    id: 3,
    sub: "Apple",
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "./p4.svg",
    iconLists: [
      "./re.svg",
      "./tail.svg",
      "./ts.svg",
      "./three.svg",
      "./gsap.svg",
    ],
    link: "https://github.com/GhoAhmed/apple_website",
  },
  {
    id: 4,
    sub: "MasterMind",
    title: "AI CV Generator and Feedback Website",
    des: "Created a website with React and Three.js for AI-based CV generation and feedback. The site rates CVs, provides notes, highlights errors, and offers improvement suggestions.",
    img: "./bw.PNG",
    iconLists: [
      "./re.svg",
      "./tail.svg",
      "./ts.svg",
      "./three.svg",
      "./gsap.svg",
      "./ai.svg",
      "./ml.svg",
    ],
    link: "https://github.com/GhoAhmed/brainwave",
  },
];

export const testimonials = [
  {
    quote:
      "Ahmed demonstrated outstanding full-stack development skills during his time at Com&Dev. His implementation of machine learning into our property rental platform brought significant innovation. His attention to architecture, modularity, and long-term scalability was truly impressive.",
    name: "Anouar Mansouri",
    title: "CEO, Com&Dev",
    img: "./anouar.jpg",
  },
  {
    quote:
      "Ahmed made a strong impact during his contribution to the Human Resource Management System project for the University of Jendouba. His deep knowledge of Angular and .NET Core, combined with his clean and structured development style, helped us meet strict requirements and timelines with confidence.",
    name: "Salah Ghodhbeni",
    title: "IT Professor with a PhD",
    img: "./salah.jpg",
  },
  {
    quote:
      "Working with Ahmed on various CDF projects, including the development of a full e-learning platform for a Saudi client, was a pleasure. His mastery of API design, Angular components, and PostgreSQL optimization made him a vital part of our success.",
    name: "Chedli El Haj Ali",
    title: "Senior Full Stack Consultant .NET/C#",
    img: "./echedli.jpg",
  },
  {
    quote:
      "Ahmed’s professionalism and creative approach during the WordPress website development for Víkonnekt exceeded our expectations. His ability to handle both backend customization and frontend design made our platform both elegant and user-friendly.",
    name: "Safa Jemai",
    title: "CEO & Founder, Víkonnekt",
    img: "./safa.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "CDF Center",
    img: "./cdf2.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Vikonnekt",
    img: "./vikonnekt.png",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Com&Dev",
    img: "./com-dev.png",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "GIZ",
    img: "./giz.png",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Skill2era",
    img: "./skill2era.png",
    nameImg: "/streamName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer | CDF Center",
    desc: "Developed a complete e-learning web application for a Saudi client using ASP.NET Core and Angular. Applied Clean Architecture, Signals, and Payload services. Optimized PostgreSQL database and collaborated in SCRUM-based workflows.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer | STD",
    desc: "Contributed to a Human Resource Management System for the University of Jendouba. Built a responsive Angular interface and developed secure ASP.NET Core APIs for employee records, payroll, and leave management.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
  {
    id: 3,
    title: "Full Stack Developer | Com&Dev",
    desc: "Architected a smart property rental platform with Angular and ASP.NET Web API. Integrated ML.NET for AI-based recommendations, pricing predictions, and sentiment analysis. Emphasized scalability and modular design.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 4,
    title: "Web Developer | Víkonnekt",
    desc: "Developed a dynamic website under WordPress, designed business cards, and produced a professional logo to ensure a coherent and attractive brand identity. Implemented custom features and plugins to meet specific client needs.",
    className: "md:col-span-2",
    thumbnail: "./exp3.svg",
  },
  {
    id: 5,
    title: "Backend Developer | CDF Center",
    desc: "Designed and implemented interactive visualizations for various agriculture-related data sources using Laravel and Javascript. Developed a comprehensive dashboard processing large amounts of data to ensure accurate and up-to-date information for analysis.",
    className: "md:col-span-2",
    thumbnail: "./exp2.svg",
  },
  {
    id: 6,
    title: "Frontend Developer | Law Firm Web Application",
    desc: "Created attractive and user-friendly interfaces for a law firm web application. Used AdminLTE with Laravel, demonstrating strong frontend development skills to ensure a smooth user experience.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/GhoAhmed",
  },
  {
    id: 2,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/ahmedghodhbeni/",
  },
  {
    id: 3,
    img: "./twit.svg",
    link: "https://x.com/ahmed_ghodhbeni",
  },
];
