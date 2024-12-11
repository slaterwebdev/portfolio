import { PageTemplate } from "@/components/layout/PageTemplate";
import homeHero from "@/assets/heros/homeHero.png";

const Home = () => (
  <PageTemplate
    content={{
      tagLine: "HELLO, MY NAME IS",
      title: "Adam Slater",
      subTitle: "Web Developer",
      image: homeHero,
    }}
  ></PageTemplate>
);

export default Home;