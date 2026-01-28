import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "personalWebsite";
const title = "Personal Website";

export const personalWebsiteProject: Project = {
  id,
  title,
  description:
    "I made this website as a place to showcase projects I have completed, projects I am currently working on, as well as my personal interests. Feel free to reach out to me on LinkedIn to connect or chat!  Below are descriptions of each section on my website:\nAbout: You can find information about me and my resume in this section.\nPersonal Projects: Here, you will find technical projects I have been working on recently, along with their associated write-ups and GitHub repositories.\nUniversity Projects: These are technical projects that I started during my time at UCSD, some of which I continued post-graduation.\nHobby Projects: This is where I put other fun projects I have been working on.  While they may be technical in nature, they are not necessarily meant to showcase specific skills.",
  tldr: "The website you are currently using - thanks for visiting!",
  highlights: [
    "Iterative, extensible foundation built to grow over time as new projects are added and existing projects evolve.",
    "Component-based UI built with React and Tailwind CSS for consistency and maintainability.",
    "Responsive design, taking both desktop and mobile devices into account.",
    "Client-side routing using HashRouter to support deep linking and refresh-safe navigation.",
  ],
  images: [],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/giovannistagnaro/giovannistagnaro.github.io",
    },
  ],
  tech: ["React", "Vite", "Tailwind", "GitHub Pages"],
};

export const personalWebsiteCard: CardItem = {
  id,
  meta: "",
  title,
  subtitle: "Complete",
  type: "project",
};
