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
    id: "universityProjects",
    title: "University Projects",
    cards: [
      {
        id: "stickyPix",
        meta: "ECE 140A/140B",
        title: "StickyPix",
        subtitle: "Hardware + Software",
        type: "route",
        route: "",
      },
      {
        id: "sayItAssitant",
        meta: "CSE 110",
        title: "SayIt! Assistant",
        subtitle: "Software",
        type: "route",
        route: "",
      },
      {
        id: "sayItAssitant",
        meta: "COGS 108",
        title: "Japanese Real Estate Prices and Proximity to Transport",
        subtitle: "Data Science + Research",
        type: "route",
        route: "",
      },
      {
        id: "iharaZetaFunction",
        meta: "MATH 199",
        title: "Ihara Zeta Function",
        subtitle: "Guided Reading",
        type: "route",
        route: "",
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
        type: "route",
        route: "",
      },
      {
        id: "n8nProjects",
        title: "n8n Agents",
        type: "route",
        route: "",
      },
    ],
  },
];
