export type GridItem = {
  id: string;
  content?: string;
  url?: string;
  src?: string;
  category?: string;
  employer?: boolean;
};

export type EmploymentData = {
  yearsServed: string;
  id: string;
  jobTitle: string;
  content: string;
};

export type PageContent = {
  id: string;
  title?: string;
  titleStyles?: string;
  children: (arg?: any, items?: any) => React.ReactNode;
  contentStyles?: string;
  row?: boolean;
  sideContent?: (arg?: any) => React.ReactNode;
};

export type Skills = {
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

export type ApiDataSection = {
  id: string;
  title?: string;
  content: string | Array<GridItem>;
  items?: Array<GridItem>;
};

export type ApiData = {
  mainImage: string;
  headerContent: {
    tagLine?: string;
    title: string;
    subTitle?: string;
    resumeLink: string;
  };
  sections: { [key: string]: ApiDataSection };
};
