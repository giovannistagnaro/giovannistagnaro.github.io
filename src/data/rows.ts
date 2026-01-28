import type { CardRowModel } from "../types/content";
import { personalWebsiteCard } from "./projects/personalProjects/personalWebsite";
import { virtuousCard } from "./projects/personalProjects/virtuous";
import { japaneseRealEstateCard } from "./projects/universityProjects/japaneseRealEstate";
import { sayItAssistantCard } from "./projects/universityProjects/sayItAssistant";

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
      virtuousCard,
      {
        id: "viaggiorni",
        meta: "Journal / Habit Tracker",
        title: "Viaggiorni",
        subtitle: "Work in Progress",
        type: "project",
      },
      personalWebsiteCard,
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
      },
      sayItAssistantCard,
      japaneseRealEstateCard,
      {
        id: "iharaZetaFunction",
        meta: "MATH 199",
        title: "Ihara Zeta Function",
        subtitle: "Guided Reading",
        type: "project",
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
      },
      {
        id: "n8nAgents",
        title: "n8n Agents",
        type: "project",
      },
    ],
  },
];
