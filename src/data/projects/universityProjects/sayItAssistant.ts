import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "sayItAssitant";
const title = "SayIt! Assistant";

export const sayItAssistantProject: Project = {
  id,
  title,
  description:
    "'SayIt! Assistant' is an AI desktop application that takes in user input via voice. The user's voice command is sent through OpenAI's Whisper API to turn it into text. From here, the command is parsed and different actions may take place.  Some examples of commands the user can give are asking questions to ChatGPT, drafting/sending emails, and editing saved data. Questions and email draft requests are sent through OpenAI's ChatGPT API and the emails are sent by using HTTP requests. Additionally, all user data is securely saved to the cloud using MongoDB so that the user can use their account to sign in on any device. All major desktop operating systems are supported, including some Linux distributions.\nThis project was one of the highlights of my university experience - it gave me a feel for what industry software development is like and allowed me an opportunity to work with an amazing team. My group of 6 was given a detailed use case from a potential user, and that was it! From there, we wrote user stories for each feature we needed to implement, drew out a UML diagram, and used GitHub Projects to make tasks and assign priorities. After planning out the first sprint, we got to work implementing our assigned tasks, testing with JUnit, and using GitHub to stay up-to-date with the newest code.  Next, we received feedback for our app and were given a new use case, so we went through the whole process a second time to maintain and add features to our app. Overall, the biggest takeaways from this project were how to code within a group, how to set up for success through good planning, and the importance of writing neat, maintainable code.",
  tldr: "Software engineering project, from user stories to finished product.",
  highlights: [
    "Experienced full software development planning phase, including creating user stories and UML diagrams.",
    "Implemented unit testing using JUnit / GitHub Actions to ensure user experience stayed consistent across builds.",
    "Utilized GitHub Projects boards to keep team organized and assign individual tasks.",
    "Held regular stand-up meetings for full alignment across team during development.",
    "Applied good software development patterns, such as Observer, Factory, and OOP for maximum code reusability.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/giovannistagnaro/SayIt-Assistant",
    },
  ],
  tech: [
    "Java",
    "OpenAI APIs",
    "Gradle",
    "JUnit",
    "GitHub",
    "CI/CD",
    "AI",
    "MongoDB",
  ],
};

export const sayItAssistantCard: CardItem = {
  id,
  meta: "CSE 110",
  title,
  subtitle: "Software",
  type: "project",
};
