const aboutContent = {
  headerContent: {
    title: "About",
    resumeLink: `${process.env.BASE_URL}/files/cv.pdf`,
  },
  mainImage: `${process.env.BASE_URL}/images/headers/about.jpg`,
  sections: {
    introduction: {
      title: "About Me",
      content:
        "I'm an enthusiastic web dev based in the UK midlands looking for my next challenge, with 3+ years in development and a previous 10 years as a mechanical engineer in the nuclear sector. It's safe to say I'm a natural problem solver.",
    },
    experience: {
      title: "Experience",
      content: [
        {
          yearsServed: "2023 - 2024",
          id: "Victorian Plumbing",
          jobTitle: "MID - SENIOR FRONTEND DEVELOPER",
          content:
            "Designed and optimised internal data management applications for one of the UK's leading e-commerce platforms, leveraging React and TypeScript within an Agile sprint system and Azure DevOps. Actively participated and leading in Three Amigos, Devsols, and software design sessions to shape architecture and implementation.",
        },
        {
          yearsServed: "2022 - 2023",
          id: "Made By Sauce",
          jobTitle: "FRONTEND DEVELOPER",
          content:
            "Contributed to internal apps for B2B clients and numerous “quote and buy” SPAs for B2C clients, including Arnold Clark, DARWIN, Howdens, Triumph, Ducati, and Adrian Flux, using React, Vue.js, October CMS and TypeScript.",
        },
        {
          yearsServed: "2021 - 2022",
          id: "Big Marketing",
          jobTitle: "JUNIOR REACT AND JAVASCRIPT DEVELOPER",
          content:
            "Developed a variation of event and sign-up sites for a small London-based agency specialising in the automotive industry using react and plain JavaScript. As well as assisting with implementing JavaScript on WordPress sites by building and customising plugins.",
        },
        {
          yearsServed: "2013 - 2021",
          id: "Goodwin International",
          jobTitle: "CNC PROGRAMMER/OPERATOR",
          content:
            "Qualified as a mechanical engineer in the nuclear sector, programming machines using languages such as FANUC and TOSNUC. Working on components for submarines and aircrafts for Rolls-Royce. Regularly used CAD/CAM software to support all stages of production.",
        },
      ],
    },
    featureImage: {
      content: `${process.env.BASE_URL}/images/misc/parallax.webp`,
    },
    skills: {
      title: "What I can offer",
      content:
        "Although I have a list of ever growing skills to offer, I pride myself on my ability to accomodate clients and co-workers needs, collaborate and knowledge share effectively, as well as build team morale and productivity in any work space.",
      items: [
        {
          title: "Languages & Frameworks",
          content: [
            "javascript",
            "html",
            "css",
            "typescript",
            "react",
            "nodeJs",
            "vueJs",
            "firebase",
          ],
        },
        {
          title: "Dev Tools & Libraries",
          content: [
            "redux",
            "tailwind",
            "sass",
            "bootstrap",
            "wordpress",
            "vite",
            "webpack",
          ],
        },
        {
          title: "Platforms & Version Control",
          content: ["azure", "github", "git", "figma"],
        },
        {
          title: "Dev Practices & Concepts",
          content: [
            "REST APIs",
            "UX/UI",
            "Agile Methodologies",
            "Software Design Principles",
          ],
        },
      ],
    },
  },
};

export default aboutContent;
