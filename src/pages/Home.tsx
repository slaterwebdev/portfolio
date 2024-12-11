import { ParallaxImage, Section, PageTemplate } from "@/components";
import homeHero from "@/assets/heros/homeHero.png";
import parallaxImageUrl from "@/assets/parallax-test.jpg";

const Home = () => (
  <PageTemplate
    content={{
      tagLine: "HELLO, MY NAME IS",
      title: "Adam Slater",
      subTitle: "Web Developer",
      image: homeHero,
    }}
  >
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
    <ParallaxImage imageUrl={parallaxImageUrl} />
  </PageTemplate>
);

export default Home;
