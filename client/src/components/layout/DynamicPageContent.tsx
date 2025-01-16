import { useFetchPageData } from "@/hooks/useFetch";
import { PageLayout, Section } from "@/components";
import { ApiDataSection, PageContent } from "@/utils/types";

const mergePageContentWithApiData = (
  pageContent: PageContent[],
  apiData: { [key: string]: ApiDataSection }
) =>
  pageContent.map(
    ({ id, contentStyles, titleStyles, children, sideContent, row }) => {
      const { items, content, title } = apiData[id] || {};
      const sectionContent = {
        id,
        contentStyles,
        titleStyles,
        title,
        row,
        sideContent: sideContent?.(items),
        children: children(content, items),
      };
      return sectionContent;
    }
  );

type DynamicPageProps = {
  pageContent: PageContent[];
};

export const DynamicPageContent = ({ pageContent }: DynamicPageProps) => {
  const { data, error } = useFetchPageData();

  if (error) {
    return (
      <p className="flex items-center h-screen">Error loading page: {error}</p>
    );
  }

  if (!data) return <p className="flex items-center h-screen">Loading...</p>;

  const mergedSections = mergePageContentWithApiData(
    pageContent,
    data.sections
  );

  return (
    <PageLayout headerContent={data.headerContent} image={data.mainImage}>
      {mergedSections.map((section, index) => (
        <Section
          key={index}
          title={section.title || ""}
          titleStyles={section.titleStyles}
          contentStyles={section.contentStyles}
          sideContent={section.sideContent}
          row={section.row}
        >
          {section.children}
        </Section>
      ))}
    </PageLayout>
  );
};
