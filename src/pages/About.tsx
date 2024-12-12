import aboutHero from "@/assets/heros/aboutHero.jpg";
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import { PageTemplate, ParallaxImage, Section, ListItem } from "@/components";
import { workExp, PageContent } from "@/utils";

const pageContent: PageContent[] = [
  {
    title: "About Me",
    titleStyles: "text-3xl",
    contentStyles: "font-playfair text-3xl font-semibold sm:text-5xl",
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
];

const About = () => (
  <PageTemplate
    content={{
      title: "About",
    }}
    image={aboutHero}
  >
    {pageContent.map(({ title, children, component, contentStyles }, index) => (
      <Section key={index} title={title || ""} contentStyles={contentStyles}>
        {children || component}
      </Section>
    ))}
  </PageTemplate>
);

export default About;
