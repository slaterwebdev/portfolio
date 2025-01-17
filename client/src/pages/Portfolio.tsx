import { Grid, DynamicPageContent } from "@/components";
import { PageContent } from "@/utils/types";

const pageContent: PageContent[] = [
  {
    id: "b2c",
    contentStyles: "sm:text-2xl",
    children: (content, items) => (
      <>
        <p>{content}</p>
        <Grid items={items} />
      </>
    ),
  },
  {
    id: "b2b",
    contentStyles: "sm:text-2xl",
    children: (content, items) => (
      <>
        <p>{content}</p>
        <Grid items={items} columns="1fr 1fr" />
      </>
    ),
  },
  {
    id: "employers",
    children: (_, items) => <Grid items={items} columns="1fr 1fr" />,
  },
];

const Portfolio = () => <DynamicPageContent pageContent={pageContent} />;

export default Portfolio;
