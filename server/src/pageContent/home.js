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
        "I am a dynamic, highly motivated, and versatile Web Developer with over three years of hands-on experience in crafting complex web applications. I am currently seeking a new role where I can apply my expertise to innovative projects, collaborate with talented teams, and drive impactful digital solutions.",
    },
    about: {
      title:
        "I help transform ideas into efficient user-focused digital products & tools",
      content:
        "Whether collaborating on cutting-edge solutions or supporting and leading teams through challenging sprints, my goal is to create seamless, user-focused experiences that deliver measurable results. I have contributed to greenfield and legacy projects for e-commerce leaders, CMS-driven websites for high-profile insurance clients, and internal data tracking apps for large-scale businesses. Expanding into full-stack development with Node and Express.js now enables me to support businesses digitally from end to end.",
    },
    featureImage: {
      content: `${process.env.BASE_URL}/images/misc/parallax.webp`,
    },
    services: {
      title: "What I bring to the table",
      content: [
        {
          id: "laptop",
          content:
            "I excel at building scalable, maintainable web applications using React, Vue.js, and TypeScript, delivering clean, reusable code that enhances performance while maintaining accessible UI/UX.",
        },
        {
          id: "stack",
          content:
            "With a strong foundation in Frontend and an ever-growing capability in Backend, I have a unique perspective on how the two sides should integrate seamlessly, enabling me to guide projects completely.",
        },
        {
          id: "api",
          content:
            "I specialise in heavy REST API data integration, powering dynamic, data-driven interfaces paired with pixel-perfect UIs to enhance user experiences, boost conversions, and streamline workflows.",
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
