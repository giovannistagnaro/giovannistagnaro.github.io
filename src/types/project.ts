export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tldr: string,
  highlights?: string[];
  images?: { src: string; alt: string; description: string }[];
  links?: ProjectLink[];
  tech?: string[];
};
