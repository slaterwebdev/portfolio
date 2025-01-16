import { portfolioImages } from "../portfolioImageData.js";

const homeContent = {
  headerContent: {
    tagLine: "HELLO, MY NAME IS",
    title: "Adam Slater",
    subTitle: "Web Developer",
    resumeLink: `${process.env.BASE_URL}/files/cv.pdf`,
  },
  mainImage: `${process.env.BASE_URL}/images/headers/home.jpg`,
  sections: {
    introduction: {
      title: "Welcome to My Portfolio!",
      content:
        "I'm a dynamic, highly motivated and versatile Web Developer with over three years of hands-on experience crafting complex web applications. I'm currently seeking a new role where I can apply my expertise to innovative projects, assist talented teams, and continue driving impactful digital solutions.",
    },
    about: {
      title:
        "I help transform ideas into efficient user-centered digital products & tools",
      content:
        "Whether collaborating on cutting-edge solutions or aiding & leading teams through challenging sprints, my goal is to create seamless, user-focused experiences that deliver measurable results. I've contributed to greenfield and legacy projects for e-commerce leaders, CMS-driven websites for high-profile insurance clients and even internal data tracking apps for large scale businesses. Expaning into full-stack development with Node and Express.js now allows me to aid businesses end to end digitally.",
    },
    featureImage: {
      content: `${process.env.BASE_URL}/images/misc/parallax.jpg`,
    },
    services: {
      title: "What I bring to the table",
      content: [
        {
          id: "laptop",
          content:
            "I excel at building scalable, maintainable web applications using React, Vue.js, and TypeScript, delivering clean, reusable code that drives performance whilst maintaining assistive UI/UX.",
        },
        {
          id: "stack",
          content:
            "With a strong foundation in Javascript and Typescript, I am expanding now expanding my skills with Node.js to deliver seamless, end-to-end solutions. I consistently adapt and grow, always ensuring versatility.",
        },
        {
          id: "api",
          content:
            "I specialize in integrating heavy REST API data to power dynamic, data-driven interfaces paired with pixel-perfect UIs, enhancing user experiences, boosting conversions, and streamlining workflows.",
        },
      ],
    },
    portfolio: {
      title: "Check out some of my previous work",
      items: portfolioImages.b2c,
      content:
        "I have worked with various employers across all major cities in england, as well as provided web apps for industry leading clients.",
    },
  },
};

export default homeContent;
