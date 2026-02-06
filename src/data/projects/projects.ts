import type { Project } from "../../types/project";
import { piholeProject } from "./hobbyProjects/pihole";
import { personalWebsiteProject } from "./personalProjects/personalWebsite";
import { viaggiorniProject } from "./personalProjects/viaggiorni";
import { virtuousProject } from "./personalProjects/virtuous";
import { iharaZetaFunctionProject } from "./universityProjects/iharaZetaFunction";
import { japaneseRealEstateProject } from "./universityProjects/japaneseRealEstate";
import { sayItAssistantProject } from "./universityProjects/sayItAssistant";
import { stickyPixProject } from "./universityProjects/stickyPix";

export const projects: Project[] = [
  personalWebsiteProject,
  virtuousProject,
  viaggiorniProject,

  stickyPixProject,
  sayItAssistantProject,
  japaneseRealEstateProject,
  iharaZetaFunctionProject,

  piholeProject,
];
