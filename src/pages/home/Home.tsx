import { ParallaxImage, PageTemplate } from "@/components";
import homeHero from "@/assets/heros/homeHero.png"
import parallaxImageUrl from "@/assets/parallax-test.jpg";
import { PortfolioSection, WelcomeSection } from "./HomeComponents";

const Home = () => (
  <PageTemplate
    content={{
      tagLine: "HELLO, MY NAME IS",
      title: "Adam Slater",
      subTitle: "Web Developer",
    }}
    image={homeHero}
  >
    <WelcomeSection />
    <ParallaxImage imageUrl={parallaxImageUrl} />
    <PortfolioSection />
  </PageTemplate>
);

export default Home;
