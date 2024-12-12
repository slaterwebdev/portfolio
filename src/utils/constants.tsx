import { getIcon } from "./iconMapper";

//GENERAL
export const linkedinURL = "https://www.linkedin.com/in/adam-slater-web-dev/";
export const portfolioRepoURL = "https://github.com/slaterwebdev/portfolio";
export const fallBackImage = "/src/assets/fallbackImage.png";

export const contactLinks: Array<{
  href: string;
  label: string;
  icon: JSX.Element;
}> = [
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
    label: "View CV",
    icon: getIcon("cv"),
  },
];