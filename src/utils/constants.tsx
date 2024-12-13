import { getIcon } from "@/utils";
import { WorkExp, GridItem, SkillsMapper } from "@/utils/types";

//GENERAL
export const linkedinURL = "https://www.linkedin.com/in/adam-slater-web-dev/";
export const portfolioRepoURL = "https://github.com/slaterwebdev/portfolio";
export const fallBackImage = "/src/assets/fallbackImage.png";

export const contactLinks: Array<{
  href: string;
  label: string;
  icon: JSX.Element;
  color?: string;
}> = [
  {
    href: portfolioRepoURL,
    label: "Site Repository",
    icon: getIcon("github"),
  },
  {
    href: "tel:07547620652",
    label: "07547620652",
    icon: getIcon("phone"),
    color: "text-lime-500",
  },
  {
    href: linkedinURL,
    label: "View Profile",
    icon: getIcon("linkedin"),
    color: "text-blue-600",
  },
  {
    href: "/cv.pdf",
    label: "View CV",
    icon: getIcon("cv"),
    color: "text-red-500",
  },
];

// Home page
export const serviceOptions: GridItem[] = [
  {
    id: "laptop",
    content:
      "I excel at building scalable, maintainable web applications using React, Vue.js, and TypeScript, delivering clean, reusable code that drives performance and supports millions of users.",
  },
  {
    id: "stack",
    content:
      "With a strong foundation in frontend development using React and Vue.js, I am expanding into Node.js to deliver seamless, end-to-end solutions. I consistently adapt and grow, always ensuring versatility.",
  },
  {
    id: "api",
    content:
      "I specialize in integrating REST APIs to power dynamic, data-driven interfaces paired with pixel-perfect UIs, enhancing user experiences, boosting conversions, and streamlining workflows.",
  },
];

// About page
export const workExp: WorkExp[] = [
  {
    yearsServed: "2023 - 2024",
    id: "Victorian Plumbing",
    jobTitle: "MID - SENIOR FRONTEND DEVELOPER",
    content:
      "Designed and optimised internal data management applications for one of the UK's leading e-commerce platforms, leveraging React and TypeScript within an Agile sprint system and Azure DevOps. Actively participated in Three Amigos, Devsols, and software design sessions to shape architecture and implementation!",
  },
  {
    yearsServed: "2022 - 2023",
    id: "Made by Sauce",
    jobTitle: "FRONTEND DEVELOPER",
    content:
      "Contributed to internal apps for B2B clients and numerous “quote and buy” SPAs for B2C clients, including Arnold Clark, DARWIN, Howdens, Triumph, Ducati, and Adrian Flux, using React, Vue.js, TypeScript,!",
  },
  {
    yearsServed: "2021 - 2022",
    id: "Big Marketing",
    jobTitle: "JUNIOR REACT AND JAVASCRIPT DEVELOPER",
    content:
      "Developed a variation of event and sign-up sites for a small London-based agency specialising in the automotive industry using react and plain javascript. As well as assisting with implementing JavaScript on WordPress sites by building and customising plugins.",
  },
];

export const skillsMapper: SkillsMapper[] = [
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
    content: ["azure", "github", "git"],
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
];