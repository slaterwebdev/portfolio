import { ReactNode } from "react";
import { ContactLinks } from "@/components/UI/ContactLinks";
import { contactLinks } from "@/utils/constants";

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

      <div className="theme-light">
        <ContactLinks isRow contactLinks={contactLinks} />
      </div>
    </div>
  </footer>
);
