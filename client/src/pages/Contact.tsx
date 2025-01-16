import { Form, DynamicPageContent } from "@/components";
import { FormFieldType, PageContent } from "@/utils/types";
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

const pageContent: PageContent[] = [
  {
    id: "communication",
    contentStyles: "sm:text-2xl justify-between",
    children: (content) => {
      return (
        <>
          <p>{content}</p>
          <a
            href={`mailto:${personalEmail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-1 flex items-center sm:justify-start justify-center gap-4 cursor-pointer hover:text-primary hover:scale-105"
          >
            {getIcon("email")}
            <p className="border-b">{personalEmail}</p>
          </a>
        </>
      );
    },
    sideContent: () => <Form formFields={formFields} />,
  },
];

const Contact = () => <DynamicPageContent pageContent={pageContent} />;

export default Contact;
