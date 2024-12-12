import { getIcon } from "./iconMapper";

//GENERAL
export const linkedinURL = "https://www.linkedin.com/in/adam-slater-web-dev/";
export const portfolioRepoURL = "https://github.com/slaterwebdev/portfolio";
export const fallBackImage = "/src/assets/fallbackImage.png";

export const currentYear = new Date().getFullYear();

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