import { NavLink } from "react-router-dom";
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import homeHero from "@/assets/heros/homeHero.png";
import { Grid, PageTemplate, ParallaxImage, Section, StackedCards } from "@/components";
import {
  scrollToTop,
  PageContent,
  portfolioImages,
  serviceOptions,
} from "@/utils";

const pageContent: PageContent[] = [
  {
    title: "Welcome to My Portfolio!",
    contentStyles: "font-playfair font-semibold sm:text-2xl",
    children: (
      <p>
        I'm a dynamic, highly motivated and versatile Web Developer with over
        three years of hands-on experience crafting complex web applications.
        I'm currently seeking a new role where I can apply my expertise to
        innovative projects, assist talented teams, and continue driving
        impactful digital solutions.
      </p>
    ),
  },
  {
    title:
      "I help transform ideas into efficient user-centered digital products & tools",
    titleStyles: "text-3xl",
    row: true,
    children: (
      <>
        <p>
          Whether collaborating on cutting-edge solutions or aiding & leading
          teams through challenging sprints, my goal is to create seamless,
          user-focused experiences that deliver measurable results.
        </p>
        <p>
          I've contributed to greenfield and legacy projects for e-commerce
          leaders, CMS-driven websites for high-profile insurance clients and
          even internal data tracking apps for large scale businesses. Expaning
          into full-stack development with Node.js now allows me to aid
          businesses end to end digitally.
        </p>
      </>
    ),
  },
  {
    component: <ParallaxImage imageUrl={parallaxImageUrl} />,
  },
  {
    title: "What I bring to the table",
    titleStyles: "text-3xl",
    children: <Grid items={serviceOptions} gap="2rem" />,
  },
  {
    title: "Check out some of my previous work",
    sideContent: <StackedCards cards={portfolioImages.B2C} />,
    children: (
      <>
        <p>
          I have worked with various employers to create stunning and functional
          websites tailored to their business needs. Go ahead and browse some of
          my available projects.
        </p>
        <div className="text-center sm:text-left">
          <NavLink
            className="text-primary underline"
            to={"/portfolio"}
            onClick={() => scrollToTop()}
          >
            VIEW MORE
          </NavLink>
        </div>
      </>
    ),
  },
];

const Home = () => (
  <PageTemplate
    content={{
      tagLine: "HELLO, MY NAME IS",
      title: "Adam Slater",
      subTitle: "Web Developer",
    }}
    image={homeHero}
  >
    {pageContent.map(
      ({ title, children, component, titleStyles, contentStyles, sideContent, row }, index) => (
        <Section
          key={index}
          title={title || ""}
          titleStyles={titleStyles}
          contentStyles={contentStyles}
          sideContent={sideContent}
          row={row}
        >
          {children || component}
        </Section>
      )
    )}
  </PageTemplate>
);

export default Home;
