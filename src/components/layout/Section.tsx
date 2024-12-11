type SectionProps = {
  title: string;
  titleStyles?: string;
  children?: React.ReactNode;
  contentStyles?: string;
  row?: boolean;
  sideContent?: JSX.Element;
};

export const Section = ({
  title,
  titleStyles = "text-3xl sm:text-5xl",
  children,
  contentStyles = "text-base",
  row = false,
  sideContent,
}: SectionProps) => (
  <section className="flex flex-col justify-between sm:flex-row gap-12 sm:flex-row">
    <div
      className={`flex flex-col gap-6 ${row && "sm:flex-row"} mb-12 sm:mb-24 w-full`}
    >
      <h1 className={`text-primary ${row && "sm:w-1/2"} ${titleStyles}`}>
        {title}
      </h1>
      {children && (
        <div
          className={`flex flex-1 flex-col gap-6 text-black ${contentStyles}`}
        >
          {children}
        </div>
      )}
    </div>
    {sideContent && (
      <aside className="w-full flex justify-center sm:justify-end">
        {sideContent}
      </aside>
    )}
  </section>
);
