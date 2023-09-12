import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    medihealth,
    som,
    tripguide,
    threejs,

    mysql,
    cplusplus,
    puntonet,
    kotlin,
    unity,
    csharp,
    PhpMyAdmin,
    ssms,

    dw1,
    dw2,
    dw3,
    dak,
    php,
    dvu,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre Mi",
    },
    {
      id: "work",
      title: "Proyectos",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Desarrollador Web",
      icon: web,
    },
    {
      title: "Desarrollo de WindowForms",
      icon: mobile,
    },
    {
      title: "Estudiando Backend",
      icon: backend,
    },
    {
      title: "Desarrollador de videojuegos",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: ".NET",
      icon: puntonet,
    },
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "PhpMyAdmin",
      icon: PhpMyAdmin,
    },
    {
      name: "SSMS",
      icon: ssms,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MediHealth",
      description:
        "Web que indica diferentes centros de salud aplicando el APIREST de google maps y desarrollado en React, proyecto necesario para conseguir certificado",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
      ],
      image: medihealth,
      source_code_link: "https://gustin23.github.io/GRUPO-3-DSD-MediHealth/",
    },
    {
      name: "SOM Sistema para cooperadora del colegio",
      description:
        "Programa para manejar de manera mas comoda y visible la cooperadora de mi colegio, hecho con windows form y C# .Trabajo para aprobar la materia Proyecto Informatico,",
      tags: [
        {
          name: "C_Sharp",
          color: "blue-text-gradient",
        },
        {
          name: "WindowsForm",
          color: "green-text-gradient",
        },
        {
          name: ".NET",
          color: "pink-text-gradient",
        },
      ],
      image: som,
      source_code_link: "https://github.com/gustin23/SOM",
    },
  ];
  

  const certificados = [
    {
      name: "Desarrollo Web 1",
      description:
        "",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
      ],
      image: dw1,
      source_code_link: "https://gustin23.github.io/GRUPO-3-DSD-MediHealth/",
    },
    {
      name: "Desarrollo Web 2",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: dw2,
      source_code_link: "https://github.com/",
    },
    {
      name: "Desarrollo Web 3",
      description:
        "",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dw3,
      source_code_link: "https://github.com/",
    },

    {
      name: "Aplicaciones con Kotlin",
      description:
        "",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dak,
      source_code_link: "https://github.com/",
    },

    {
      name: "Desarrollo con PHP",
      description:
        "",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: php,
      source_code_link: "https://github.com/",
    },

    {
      name: "Videojuegos con Unity",
      description:
        "",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dvu,
      source_code_link: "https://github.com/",
    },
  ];

  export { certificados, services, technologies, experiences, testimonials, projects };