import type { CardRowModel } from "../types/content";
import { personalWebsiteCard } from "./projects/personalProjects/personalWebsite";
import { viaggiorniCard } from "./projects/personalProjects/viaggiorni";
import { virtuousCard } from "./projects/personalProjects/virtuous";
import { iharaZetaFunctionCard } from "./projects/universityProjects/iharaZetaFunction";
import { japaneseRealEstateCard } from "./projects/universityProjects/japaneseRealEstate";
import { sayItAssistantCard } from "./projects/universityProjects/sayItAssistant";
import { stickyPixCard } from "./projects/universityProjects/stickyPix";

export const rows: CardRowModel[] = [
  {
    id: "about",
    title: "About",
    cards: [
      {
        id: "resume",
        title: "My Resume",
        type: "external",
        href: "https://docs.google.com/document/d/1SRqH9vVj-5X-7arlDHyZH70m0OXzH-z19FvhRtEqa9A/edit?usp=sharing",
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
    cards: [personalWebsiteCard, virtuousCard, viaggiorniCard],
  },
  {
    id: "universityProjects",
    title: "University Projects",
    cards: [
      stickyPixCard,
      sayItAssistantCard,
      japaneseRealEstateCard,
      iharaZetaFunctionCard,
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
        id: "aiAgents",
        title: "AI Agents",
        type: "project",
      },
    ],
  },
];
