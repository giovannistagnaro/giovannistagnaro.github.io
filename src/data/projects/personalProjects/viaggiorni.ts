import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "viaggiorni";
const title = "Viaggiorni";

export const viaggiorniProject: Project = {
  id,
  title,
  description: "Viaggiorni is still in the planning phase but when it is completed, it should have something along the lines of the following features: writing daily journal entries, creating checklists to complete for the next day, tabs for keeping track of habits, a streak system to keep track of how many days certain goals have been kept, and potentially API integration for local AI services.\nI am a big believer in personal user privacy, and as a daily journal is quite a private thing for most people, I will have this app focus on privacy. For Viaggiorni, this means local storage only, a password system, and encrypted data. I want my users to feel safe and secure so that they can be as honest as possible with their goals and journal entries for themselves.",
  tldr: "App to Track Habits and Daily Journal Entries, with an Emphasis on Privacy",
  tech: ["React", "Vite", "Node", "SQLite"],
};

export const viaggiorniCard: CardItem = {
  id,
  meta: "Journal / Habit Tracker",
  title,
  subtitle: "Work in Progress",
  type: "project",
};
