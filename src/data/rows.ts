import type { CardRowModel } from "../types/content";

export const rows: CardRowModel[] = [
  {
    id: "about",
    title: "About",
    cards: [
      {
        id: "resume",
        title: "My Resume",
        type: "pdf",
        pdfSrc: "/pdfs/giovanniStagnaroResume.pdf",
      },
      {
        id: "linkedin",
        title: "My LinkedIn",
        subtitle: "@giovanni-stagnaro",
        type: "external",
        href: "https://www.linkedin.com/in/giovanni-stagnaro",
      },
      {
        id: "github",
        title: "My GitHub",
        subtitle: "@giovannistagnaro",
        type: "external",
        href: "https://github.com/giovannistagnaro/",
      },
    ],
  },
  {
    id: "personalProjects",
    title: "Personal Projects",
    cards: [
      {
        id: "virtuous",
        meta: "2D Game Engine",
        title: "Virtuous",
        subtitle: "MVP",
        type: "project",
        projectId: "virtuousProject",
      },
      {
        id: "viaggiorni",
        meta: "Journal / Habit Tracker",
        title: "Viaggiorni",
        subtitle: "Work in Progress",
        type: "project",
        projectId: "viaggiorniProject",
      },
      {
        id: "personalWebsite",
        meta: "",
        title: "Personal Website",
        subtitle: "Complete",
        type: "project",
        projectId: "personalWebsiteProject",
      },
    ],
  },
  {
    id: "universityProjects",
    title: "University Projects",
    cards: [
      {
        id: "stickyPix",
        meta: "ECE 140A/140B",
        title: "StickyPix",
        subtitle: "Hardware + Software",
        type: "project",
        projectId: "stickyPixProject",
      },
      {
        id: "sayItAssitant",
        meta: "CSE 110",
        title: "SayIt! Assistant",
        subtitle: "Software",
        type: "project",
        projectId: "sayItAssistantProject",
      },
      {
        id: "japaneseRealEstate",
        meta: "COGS 108",
        title: "Japanese Real Estate Prices and Proximity to Transport",
        subtitle: "Data Science + Research",
        type: "project",
        projectId: "japaneseRealEstateProject",
      },
      {
        id: "iharaZetaFunction",
        meta: "MATH 199",
        title: "Ihara Zeta Function",
        subtitle: "Guided Reading",
        type: "project",
        projectId: "iharaZetaFunctionProject",
      },
    ],
  },

  {
    id: "hobbyProjects",
    title: "Hobby Projects",
    cards: [
      {
        id: "piehole",
        title: "Pie-Hole",
        type: "project",
        projectId: "pieHoleProject",
      },
      {
        id: "n8nAgents",
        title: "n8n Agents",
        type: "project",
        projectId: "n8nProject",
      },
    ],
  },
];
