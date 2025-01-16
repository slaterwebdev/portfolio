import { contactLinks } from "@/utils";

type PageLayoutProps = {
  headerContent: {
    title: string;
    subTitle?: string;
    tagLine?: string;
    resumeLink: string;
  };
  image: string;
  children: React.ReactNode;
};

const HeaderContent = ({
  title,
  subTitle,
  tagLine,
  resumeLink,
}: {
  title: string;
  subTitle?: string;
  tagLine?: string;
  resumeLink: string;
}) => (
  <div className="font-playfair flex flex-col gap-3 z-10 w-full sm:w-auto">
    {tagLine && <p className="text-md text-slate-500 lg:text-lg">{tagLine}</p>}
    <div className="bg-slate-500 w-20 h-1 my-4"></div>
    <h1 className="text-5xl lg:text-8xl font-bold text-black">{title}</h1>
    {subTitle && (
      <div className="flex gap-5">
        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-500">
          {subTitle}
        </h2>
      </div>
    )}
    <div className="flex flex-col gap-1 font-sans mt-6">
      {contactLinks.map(({ href, icon, label, color }, index) => (
        <a
          key={index}
          href={(Boolean(href) && href) || resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary hover:scale-105 flex gap-5 items-center"
        >
          <span className={color || ""}>{icon}</span>
          {label}
        </a>
      ))}
    </div>
  </div>
);

const HeaderImage = ({
  image,
  altText,
}: {
  image: string;
  altText: string;
}) => (
  <div className="rounded-full bg-white w-80 lg:w-[500px] overflow-hidden z-10">
    <img
      src={image}
      alt={altText}
      className="object-cover w-full"
      loading="lazy"
    />
  </div>
);

export const PageLayout = ({
  headerContent,
  children,
  image,
}: PageLayoutProps) => (
  <div className="relative max-w-screen-xl w-full mb-12 sm:mb-24">
    <div className="absolute -right-64 -top-64 rounded-full bg-primary to-gray-50 opacity-30 circle-backdrop"></div>

    <header className="flex flex-col-reverse sm:flex-row items-center justify-between gap-10 lg:gap-20 mt-20 sm:mt-0 mb-12 sm:h-screen max-h-[800px]">
      <HeaderContent {...headerContent} />
      <HeaderImage image={image} altText={`${headerContent.title} page`} />
    </header>

    <main className="flex flex-col gap-12 sm:gap-24">{children}</main>
  </div>
);
