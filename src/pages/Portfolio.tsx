import { PageTemplate } from "@/components";
import portfolioHero from "@/assets/heros/portfolioHero.jpg";

const Portfolio = () => (
  <PageTemplate
    content={{
      title: "Portfolio",
      image: portfolioHero,
    }}
  ></PageTemplate>
);

export default Portfolio;
