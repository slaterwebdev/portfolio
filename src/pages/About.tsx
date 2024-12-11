import { PageTemplate } from "@/components";
import aboutHero from "@/assets/heros/aboutHero.jpg";
import { Section } from "@/components";

const About = () => (
  <PageTemplate
    content={{
      title: "About",
      image: aboutHero,
    }}
  >
    <Section
      title="About me"
      titleStyles="text-3xl"
      contentStyles="font-playfair text-3xl font-semibold sm:text-5xl"
    >
      <p>
        I am an enthusiastic web dev based in the UK midlands, with
        a rich experience of over 3 years in building web based business solutions.
      </p>
    </Section>
  </PageTemplate>
);

export default About;