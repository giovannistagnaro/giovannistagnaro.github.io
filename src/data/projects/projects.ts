import type { Project } from "../../types/project";
import { personalWebsiteProject } from "./personalProjects/personalWebsite";
import { virtuousProject } from "./personalProjects/virtuous";
import { japaneseRealEstateProject } from "./universityProjects/japaneseRealEstate";
import { sayItAssistantProject } from "./universityProjects/sayItAssistant";

export const projects: Project[] = [
  virtuousProject,
  personalWebsiteProject,
  japaneseRealEstateProject,
  sayItAssistantProject,
];
