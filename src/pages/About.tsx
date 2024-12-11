import { PageTemplate } from "@/components";
import aboutHero from "@/assets/heros/aboutHero.jpg";

const About = () => (
  <PageTemplate
    content={{
      title: "About",
      image: aboutHero,
    }}
  ></PageTemplate>
);

export default About;