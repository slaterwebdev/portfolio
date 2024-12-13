import aboutHero from "@/assets/heros/aboutHero.jpg";
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import {
  PageTemplate,
  ParallaxImage,
  Section,
  ListItem,
  Accordion,
} from "@/components";
import { workExp, skillsData, getIcon } from "@/utils";
import { PageContent } from "@/utils/types";

const skillsAccordionItems = skillsData.map(({ title, content }) => ({
  title,
  content: content.map((skill, index) => {
    const isDefaultIcon = getIcon(skill).props.id === "default";

    return isDefaultIcon ? (
      <ListItem key={index} title={skill} />
    ) : (
      <span key={index} className="text-2xl mx-2">
        {getIcon(skill)}
      </span>
    );
  }),
}));

const pageContent: PageContent[] = [
  {
    title: "About Me",
    titleStyles: "text-3xl",
    contentStyles: "font-playfair font-semibold sm:text-3xl",
    children: (
      <p>
        I am an enthusiastic web dev based in the UK midlands, with a rich
        experience of over 3 years in building web based business solutions.
      </p>
    ),
  },
  {
    title: "Experience",
    titleStyles: "text-3xl",
    children: (
      <ul>
        {workExp.map(({ yearsServed, id, jobTitle, content }) => (
          <ListItem
            key={id}
            title={jobTitle}
            description={content}
            data={[{ value: yearsServed, name: id }]}
          />
        ))}
      </ul>
    ),
  },
  { component: <ParallaxImage imageUrl={parallaxImageUrl} /> },
  {
    title: "What I can offer",
    sideContent: <Accordion items={skillsAccordionItems} />,
    children: (
      <p>
        From understanding your requirements, designing a blueprint and
        delivering the final product, I do everything that falls in between
        these lines.
      </p>
    ),
  },
];

const About = () => (
  <PageTemplate
    content={{
      title: "About",
    }}
    image={aboutHero}
  >
    {pageContent.map(
      ({ title, children, component, contentStyles, sideContent }, index) => (
        <Section
          key={index}
          title={title || ""}
          contentStyles={contentStyles}
          sideContent={sideContent}
        >
          {children || component}
        </Section>
      )
    )}
  </PageTemplate>
);

export default About;
