import { NavLink } from "react-router-dom";
import { scrollToTop } from "@/utils/utilities";
import { Section, StackedCards, Grid } from "@/components";
import { portfolioImages } from "@/utils/imageMapper";
import { GridItem } from "@/utils/types";

export const WelcomeSection = () => (
  <>
    <Section
      title="Welcome to My Portfolio!"
      contentStyles="font-playfair font-semibold sm:text-2xl"
    >
      <p>
        I'm a dynamic, highly motivated and versatile Web Developer with over
        three years of hands-on experience crafting complex web applications.
        I'm currently seeking a new role where I can apply my experise to
        innovative projects, assist talented teams, and continue driving
        impactful digital solutions.
      </p>
    </Section>
    <Section
      title="I help transform ideas into efficent user centred digital products & tools"
      row
      titleStyles="text-3xl"
    >
      <p>
        Whether collaborating on cutting-edge solutions or aiding & leading
        teams through challenging sprints, my goal is to create seamless,
        user-focused digital experiences that deliver measurable results.
      </p>
      <p>
        I've contributed to greenfield projects, legacy apps for e-commerce
        leaders like Victorian Plumbing, and even CMS-driven websites for
        high-profile insurance clients such as Arnold Clark, DARWIN, and
        Triumph. Expansion into full-stack development with Node.js has equipped
        me to handle every angle of the development process. I'm eager to bring
        these new expertise to whats next and help deliver innovative, tailored
        and scalable solutions.
      </p>
    </Section>
  </>
);

export const ServicesSection = () => {
  const serviceOptions: GridItem[] = [
    {
      id: "laptop",
      content:
        "I excel at building scalable, maintainable web applications using React, Vue.js, and TypeScript, delivering clean, reusable code that drives performance and supports millions of users.",
    },
    {
      id: "stack",
      content:
        "With a strong foundation in frontend development using React and Vue.js, I am expanding into Node.js to deliver seamless, end-to-end solutions. I consistently adapt and grow, always ensuring versatility.",
    },
    {
      id: "api",
      content:
        "I specialize in integrating REST APIs to power dynamic, data-driven interfaces paired with pixel-perfect UIs, enhancing user experiences, boosting conversions, and streamlining workflows.",
    },
  ];
  return (
    <Section title="What I bring to the table" titleStyles="text-3xl">
      <Grid items={serviceOptions} gap="2rem" />
    </Section>
  )
}

export const PortfolioSection = () => (
  <Section
    title="Check out some of my previous work"
    sideContent={<StackedCards cards={portfolioImages.B2C} />}
  >
    <p>
      I have worked with various employers to create stunning and functional
      websites tailored to their business needs. Go ahead and browse some of my
      available projects.
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
  </Section>
);
