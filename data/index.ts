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
      img: "/b1.svg",
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
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
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
      sub : "COLO",
      title: "COLO: Intelligent Property Rental System",
      des: "Building a web application for apartment rentals using ASP.NET Core MVC. COLO provides machine learning models with ML.NET, offering features like recommendation systems, price prediction, and sentiment analysis.",
      img: "/colo.png",
      iconLists: ["/dot-net.svg", "/js.svg", "/html.svg", "/css.svg", "ai.svg", "/ml.svg"],
      link: "https://github.com/GhoAhmed/Colo",
    },
    {
      id: 2,
      sub : "Memory",
      title: "Memory Game for kids",
      des: "Developed an engaging memory game using Python with Pygame and Tkinter, enhancing problem-solving skills and user interaction.",
      img: "/memory.png",
      iconLists: ["/py.svg", "/py-game.svg", "/gd.svg"],
      link: "https://github.com/GhoAhmed/memory_game",
    },
    {
      id: 3,
      sub : "Apple",
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/GhoAhmed/apple_website",
    },
    {
      id: 4,
      sub : "MasterMind",
      title: "AI CV Generator and Feedback Website",
      des: "Created a website with React and Three.js for AI-based CV generation and feedback. The site rates CVs, provides notes, highlights errors, and offers improvement suggestions.",
      img: "/bw.png",
      iconLists: ["/re.svg", "tail.svg", "ts.svg", "/three.svg", "/gsap.svg", "/ai.svg", "/ml.svg"],
      link: "https://github.com/GhoAhmed/brainwave",
    },
  ];

  export const testimonials = [
    {
      quote:
        "Collaborating with Ahmed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ahmed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ahmed is the ideal partner.",
      name: "Echedli El Haj Ali",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Ahmed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ahmed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ahmed is the ideal partner.",
      name: "Anouar Mansouri",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Ahmed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ahmed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ahmed is the ideal partner.",
      name: "Safe Jemai",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Ahmed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ahmed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ahmed is the ideal partner.",
      name: "Salah Ghodhbeni",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Ahmed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ahmed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ahmed is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];

  export const companies = [
    {
      id: 1,
      name: "CDF Center",
      img: "/cdf.png",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "Vikonnekt",
      img: "/vikonnekt.png",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "Com&Dev",
      img: "/com-dev.png",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "GIZ",
      img: "/giz.png",
      nameImg: "/streamName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Full Stack Developer",
      desc: "Developed a robust and convenient web application for e-commerce using ASP.NET Core for the backend and Angular for the frontend. Conception of intuitive interfaces and visual appearance.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web Developer",
      desc: "Developed a dynamic website under WordPress, designed business cards, and produced a professional logo to ensure a coherent and attractive brand identity. Implemented custom features and plugins to meet specific client needs.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Backend Developer",
      desc: "Designed and implemented interactive visualizations for various agriculture-related data sources. Developed a comprehensive dashboard processing large amounts of data to ensure accurate and up-to-date information for analysis.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "End of Study Project Internship | Engineering cycle",
      desc: "Created a web application for a real estate rental system. Integrated machine learning features such as recommendation, sentiment analysis, and price prediction, improving rental system functionality and user experience.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 5,
      title: "Web Developer Intern",
      desc: "Participated in the development of a static website using Bootstrap, Html/Css. Worked in a dynamic and collaborative environment to ensure high quality results and improved usability of the website.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 6,
      title: "Frontend Developer Intern",
      desc: "Created attractive and user-friendly interfaces for a law firm web application. Used AdminLTE with Laravel, demonstrating strong frontend development skills to ensure a smooth user experience.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 7,
      title: "End of Study Project Internship | Bachelor",
      desc: "Led the development of key functionalities for a digital marketing platform using ASP.NET Core and Angular. Used SCRUM methodology to ensure efficient development, promoting collaboration and timely delivery.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  