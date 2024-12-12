import portfolioHero from "@/assets/heros/portfolioHero.jpg";
import { PageTemplate, Section, Grid } from "@/components";
import { portfolioImages } from "@/utils";
import { PageContent } from "@/utils/types";

const pageContent: PageContent[] = [
  {
    title: "Key B2C Frontend builds",
    children: (
      <p>
        A few handpicked examples of many B2C client-facing websites where I
        made major contributions or led the frontend development, delivering
        high-quality, scalable solutions. Each project involved crafting
        responsive, user-focused interfaces, working with large data sets and
        user data extraction, and collaborating with teams to ensure seamless
        functionality and exceptional user experiences.
      </p>
    ),
    component: <Grid items={portfolioImages.B2C} />,
  },
  {
    title: "B2B Frontend Internal Apps",
    children: (
      <>
        <p>
          I have previously developed private internal applications for
          enterprise clients, providing critical business solutions. Due to IP
          restrictions, these projects cannot be publicly displayed, but they
          were instrumental in streamlining workflows, integrating complex APIs,
          and supporting essential client operations.
        </p>
        <p>
          At Victorian Plumbing, I created internal tools that improved
          operational efficiency, some of which directly supported the codebase
          for the customer-facing B2C site. Many other tools were developed to
          address specific business challenges within VP, and the links featured
          in the Help Centre highlight areas where these applications
          effectively resolved issues.
        </p>
      </>
    ),
    component: <Grid items={portfolioImages.B2B} columns="1fr 1fr" />,
  },
  {
    title: "Previous Employers",
    component: <Grid items={portfolioImages.employers} columns="1fr 1fr" />,
  },
];

const Portfolio = () => (
  <PageTemplate
    content={{
      title: "Portfolio",
    }}
    image={portfolioHero}
  >
    {pageContent.map(({ title, children, component }, index) => (
      <Section key={index} title={title || ""} contentStyles="font-playfair">
        {children}
        {component && component}
      </Section>
    ))}
  </PageTemplate>
);

export default Portfolio;
