type LinkListProps = {
  links: Array<{
    href: string;
    label?: string;
    icon: React.ReactNode;
  }>;
  isRow?: boolean;
};

export const LinkList = ({ links, isRow = false }: LinkListProps) => (
  <div className={`flex ${isRow ? "gap-5 items-center" : "flex-col gap-2 mt-6"}`}>
    {links.map(({ href, icon, label }, index) => (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:scale-105 transition-transform font-sans ${
          !isRow && "flex items-center gap-5"
        }`}
      >
        {icon}
        {!isRow && label}
      </a>
    ))}
  </div>
);
