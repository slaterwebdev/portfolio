import { getIcon } from "@/utils/iconMapper";

//GENERAL
export const linkedinURL = "https://www.linkedin.com/in/adam-slater-web-dev/";
export const githubURL = "https://github.com/slaterwebdev"
export const portfolioRepoURL = "https://github.com/slaterwebdev/"

// HOME PAGE
export const contactLinks: Array<{
  href: string, 
  label: string, 
  icon: JSX.Element
}> = [
  {
    href: "mailto:adamslater1996@outlook.com",
    label: "adamslater1996@outlook.com",
    icon: getIcon("email"),
  },
  {
    href: "tel:07547620652",
    label: "07547620652",
    icon: getIcon("phone"),
  },
  {
    href: portfolioRepoURL,
    label: "Site Repository",
    icon: getIcon("github"),
  },
  {
    href: "/cv.pdf",
    label: "View My CV",
    icon: getIcon("cv"),
  },
];