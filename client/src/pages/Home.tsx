import {
  Grid,
  StackedCards,
  ParallaxImage,
  DynamicPageContent,
} from "@/components";
import { scrollToTop } from "@/utils";
import { PageContent } from "@/utils/types";

const pageContent: PageContent[] = [
  {
    id: "introduction",
    contentStyles: "font-playfair font-semibold sm:text-2xl",
    children: (content) => <p>{content}</p>,
  },
  {
    id: "about",
    row: true,
    titleStyles: "text-3xl",
    children: (content) => <p>{content}</p>,
  },
  {
    id: "featureImage",
    children: (content) => <ParallaxImage imageUrl={content} />,
  },
  {
    id: "services",
    titleStyles: "text-3xl",
    children: (content) => <Grid items={content} gap="2rem" />,
  },
  {
    id: "portfolio",
    sideContent: (images) => <StackedCards cards={images} />,
    children: (content) => (
      <>
        <p>{content}</p>
        <div className="text-center sm:text-left w-full sm:w-24 hover:scale-105">
          <a
            className="text-primary underline"
            href="/portfolio"
            onClick={scrollToTop}
          >
            VIEW MORE
          </a>
        </div>
      </>
    ),
  },
];

const Home = () => <DynamicPageContent pageContent={pageContent} />;

export default Home;
