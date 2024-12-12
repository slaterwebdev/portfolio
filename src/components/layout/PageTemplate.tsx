import { contactLinks } from "@/utils/constants";
import { LinkList } from "@/components";

type PageTemplateProps = {
  content: {
    title: string;
    subTitle?: string;
    tagLine?: string;
  };
  image: string;
  children?: React.ReactNode;
};

const HeroContent = ({
  title,
  subTitle,
  tagLine,
}: {
  title: string;
  subTitle?: string;
  tagLine?: string;
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
    <LinkList links={contactLinks} />
  </div>
);

const HeroImage = ({ image, altText }: { image: string; altText: string }) => (
  <div className="rounded-full bg-white h-80 w-80 overflow-hidden z-10">
    <img
      src={image}
      alt={altText}
      className="object-cover w-full h-full"
      loading="lazy"
    />
  </div>
);

export const PageTemplate = ({ content, children, image }: PageTemplateProps) => (
  <main className="relative max-w-screen-xl w-full mb-12 sm:mb-24">
    <div className="absolute -right-64 -top-64 rounded-full bg-gradient-to-r from-primary to-gray-50 opacity-50 circle-backdrop"></div>

    <section className="flex flex-col-reverse sm:flex-row items-center justify-between gap-10 lg:gap-20 mt-20 sm:mt-0 mb-12 sm:h-screen">
      <HeroContent {...content} />
      <HeroImage image={image} altText={`${content.title} page`} />
    </section>

    {children && <section className="flex flex-col gap-12 sm:gap-24">{children}</section>}
  </main>
);
