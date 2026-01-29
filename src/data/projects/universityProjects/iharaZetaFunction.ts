import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "iharaZetaFunction";
const title = "Ihara Zeta Function";

export const iharaZetaFunctionProject: Project = {
  id,
  title,
  description:
    "This was a guided independent study between Professor Jon Aycock, fellow student Aniket Iyer, and myself. Aniket and I met in Professor Aycock's MATH 103B (Modern Algebra II) course. Throughout our study, we covered topics ranging from the Riemann Zeta function, to covering graphs, to topology. The mathematics was very difficult and rigorous, but it was a rewarding experience to work with a knowledgeable professor at a personal level, learning advanced mathematics that I would not otherwise have been exposed to. We continued this study as a group for a year after graduation, as Aniket and I were both interested in learning more about this field.\nIf you are interested in learning more about what we covered, my writeups for each quarter are hosted in the GitHub repository linked below.",
  tldr: "Independent Study of Advanced Mathematical Topics",
  highlights: [
    "Learned about prime cycles on graphs.",
    "Studied how covering graphs preserve data using less resources.",
    "Expaned knowledge of abstract algebra and how it relates to graph theory.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/giovannistagnaro/Ihara-Zeta-Function/tree/master",
    },
  ],
  tech: ["LaTeX", "Abstract Algebra", "Topology"],
};

export const iharaZetaFunctionCard: CardItem = {
  id,
  meta: "MATH 199 (Multiple Sessions)",
  title,
  subtitle: "Guided Independent Study",
  type: "project",
};
