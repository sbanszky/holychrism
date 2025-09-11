export type Subsection = {
  title: string;
  content: string;
};

export type Section = {
  id: string;
  title: string;
  content: string;
  subsections?: Subsection[];
};
