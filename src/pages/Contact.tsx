import { Form, PageTemplate, Section } from "@/components";
import contactHero from "@/assets/heros/contactHero.jpg";
import { FormFieldType } from "@/utils/types";
import { getIcon, personalEmail } from "@/utils";

const formFields: FormFieldType[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter name",
    validate: function (value: string) {
      return !value.trim() ? `A ${this.name} is required.` : "";
    },
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter email",
    validate: function (value: string) {
      return /^\S+@\S+\.\S+$/.test(value) ? "" : `Valid ${this.name} required.`;
    },
  },
  {
    name: "number",
    type: "number",
    placeholder: "Enter number",
    validate: function (value: string) {
      return !value.trim() ? `A ${this.name} is required.` : "";
    },
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Message",
    rows: 8,
    validate: function (value: string) {
      return !value.trim() ? `A ${this.name} is required.` : "";
    },
  },
];

const Contact = () => (
  <PageTemplate
    content={{
      title: "Get In Touch",
    }}
    image={contactHero}
  >
    <Section
      title="Send me a message"
      contentStyles="sm:text-2xl justify-between"
      sideContent={<Form formFields={formFields} />}
    >
      <p className="font-playfair font-semibold">
        Whether you wish to discuss potential employment, share or colloborate,
        simply fill in this form or email me directly and I'll get back to you
        soon!
      </p>
      <a
        href={`mailto:${personalEmail}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pb-1 flex items-center sm:justify-start justify-center gap-4 cursor-pointer hover:text-primary hover:scale-105"
      >
        {getIcon("email")}
        <p className="border-b">adamslater1996@outlook.com</p>
      </a>
    </Section>
  </PageTemplate>
);

export default Contact;
