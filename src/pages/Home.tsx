import { PageTemplate } from "@/components/layout/PageTemplate";
import profilePic from "@/assets/heros/profile.png";

const Home = () => (
  <PageTemplate
    content={{
      tagLine: "HELLO, MY NAME IS",
      title: "Adam Slater",
      subTitle: "Web Developer",
    }}
    image={profilePic}
  >
  </PageTemplate>
);

export default Home;