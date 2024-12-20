export type GridItem = {
  id: string;
  content?: string;
  url?: string;
  src?: string;
  category?: string;
  employer?: boolean;
};

export type WorkExp = {
  yearsServed: string;
  id: string;
  jobTitle: string;
  content: string;
};

export type SectionProps = {
  title?: string;
  titleStyles?: string;
  children?: React.ReactNode;
  contentStyles?: string;
  row?: boolean;
  sideContent?: JSX.Element;
};

export type PageContent = SectionProps & {
  component?: React.ReactNode;
};

export type SkillsMapper = {
  title: string;
  content: Array<string>;
};

export type FormFieldType = {
  name: string;
  type: "text" | "email" | "number" | "textarea";
  placeholder: string;
  rows?: number;
  validate?: (value: string) => string;
};