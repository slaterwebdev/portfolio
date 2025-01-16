import { ReactNode } from "react";
import { contactLinks } from "@/utils";

type FooterProps = {
  navLinks: Array<ReactNode>;
};

const currentYear = new Date().getFullYear();

export const Footer = ({ navLinks }: FooterProps) => (
  <footer className="bg-gray-800 text-white p-4 w-screen">
    <div className="mx-auto max-w-screen-xl flex flex-col justify-between items-center sm:flex-row gap-4">
      <p className="text-sm">
        &copy; {currentYear} Adam Slater. All rights reserved.
      </p>

      <nav className="flex gap-6">{navLinks}</nav>

      <div className="flex gap-4 items-center">
        {contactLinks.filter(link => link.href).map(({ href, icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
