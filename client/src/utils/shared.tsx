import { getIcon } from "@/utils";

export const linkedinURL = "https://www.linkedin.com/in/adam-slater-web-dev/";
export const portfolioRepoURL = "https://github.com/slaterwebdev/portfolio";
export const personalEmail = "adamslater1996@outlook.com";
export const API_BASE_URL = import.meta.env.VITE_BASE_API_URL || "https://adam-slater-portfolio.onrender.com";

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
    href: "",
    label: "View CV",
    icon: getIcon("cv"),
    color: "text-red-500",
  },
];

export const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
