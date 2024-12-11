import { PageTemplate, Section } from "@/components";
import contactHero from "@/assets/heros/contactHero.jpg";

const Contact = () => (
  <PageTemplate
    content={{
      title: "Get In Touch",
      image: contactHero,
    }}
  >
    <Section
      title="Send me a message"
      contentStyles="text-3xl"
    >
      <p>
        Whether you wish to discuss potential employment, share & collaborate on
        ideas or have a project for me, simply fill in this form and I'll get
        back to you soon!
      </p>
    </Section>
  </PageTemplate>
);

export default Contact;
