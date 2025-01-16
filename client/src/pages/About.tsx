import {
  ParallaxImage,
  ListItem,
  Accordion,
  DynamicPageContent,
} from "@/components";
import { getIcon } from "@/utils";
import { EmploymentData, PageContent, Skills } from "@/utils/types";

const pageContent: PageContent[] = [
  {
    id: "introduction",
    titleStyles: "text-3xl",
    contentStyles: "font-playfair font-semibold sm:text-3xl",
    children: (content) => <p>{content}</p>,
  },
  {
    id: "experience",
    titleStyles: "text-3xl",
    children: (content) => (
      <ul className="border-t">
        {content.map(
          ({ yearsServed, id, jobTitle, content }: EmploymentData) => (
            <ListItem
              key={id}
              title={jobTitle}
              description={content}
              data={[{ value: yearsServed, name: id }]}
            />
          )
        )}
      </ul>
    ),
  },
  {
    id: "featureImage",
    children: (content) => <ParallaxImage imageUrl={content} />,
  },
  {
    id: "skills",
    title: "What I can offer",
    sideContent: (images) => {
      const mappedIcons = images.map(({ title, content }: Skills) => ({
        title,
        content: content.map((skill, index) => (
          getIcon(skill) ? (
            <span key={index} className="text-2xl mx-2">
              {getIcon(skill)}
            </span>
          ) : (
            <ListItem key={index} title={skill} />
          )
        )),
      }));
      return <Accordion items={mappedIcons} />;
    },
    children: (content) => <p>{content}</p>,
  },
];

const About = () => <DynamicPageContent pageContent={pageContent} />;

export default About;
