type ContactLinksProps = {
  contactLinks: Array<{
    href: string;
    label?: string;
    icon: React.ReactNode;
  }>;
  isRow?: boolean;
};

export const ContactLinks = ({
  contactLinks,
  isRow = false,
}: ContactLinksProps) => (
  <div className={`flex ${isRow ? "gap-5 items-center" : "flex-col mt-6"}`}>
    {contactLinks.map(({ href, icon, label }, index) => (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:scale-105 transition-transform font-sans ${
          !isRow && "flex items-center gap-5 mb-2"
        }`}
      >
        {icon}
        {!isRow && label}
      </a>
    ))}
  </div>
);
