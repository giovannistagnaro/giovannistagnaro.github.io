import StickyPixUrl from "../../../assets/images/stickyPix/sticky-pix.png";
import StickyPixDockedUrl from "../../../assets/images/stickyPix/sticky-pix-docked.png";
import StickyPixGroupUrl from "../../../assets/images/stickyPix/sticky-pix-group.png";
import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "stickyPix";
const title = "StickyPix";

export const stickyPixProject: Project = {
  id,
  title,
  description:
    "StickyPix is an e-ink display that allows the user to upload and store images and text through a web application. Since we use e-ink technology, any image loaded onto the device will persist even without being connected to a power source. There is a magnetic backing to the device so that it can be stuck in various places, from the back of a laptop to the fridge. In order to change images, StickyPix does need power, so it comes with a dock that transfers data using an ESP32.\nStickyPix was a multi-quarter product that required a high degree of effort, creativity, and determination from my team. This was, far and away, the most demanding project I had the opportunity to work on during college. There were roadblocks every step of the way, it was full of uncertainty, countless nights of trying to learn concepts foreign to me at the time, but in the end it was all worth it and I would do it again everyday. Having a project with limited guidelines and massive deadlines was exhilarating and rewarding, especially with the amazing team I was able to work with.\nThis project all started from the very basics of product design; how do you make something realistic, inevitable, believable, and scalable that also strikes an interest in people and has a real userbase? We tackled this by brainstorming multiple ideas, writing reports about the required costs and materials, and interviewing real people (not just friends and family) about what they liked/disliked about our ideas.  Our initial ideas, while interesting to us, turned out to not be loved by those we interviewed, so we had to pivot multiple times; first, from a productivity-focused product, then to a gym equipment queueing system, and finally StickyPix.\nIn order to create StickyPix, there were many tools and skills my team had to learn on our own. This included using AutoDesk to make 3D models of the dock and case, manually soldering to the ESP32, getting the hardware and software to interact with each other reliably, and 3D printing various designs. For each iteration, we would collect feedback by cold interviewing people and use this to strengthen our product. By the end we had a completed, working MVP and a 30 page report backing our consumer research, materials and assembly costs vs profit, and technical components.",
  tldr: "Complete product engineering experience, from conception to consumer studies to hardware and software design.",
  highlights: [
    "Led end-to-end development of StickyPix, an e-ink display device with magnetic mounting.",
    "Built a fully functional MVP from scratch by autonomously learning and applying unfamiliar skills.",
    "Validated product-market fit through rigorous consumer research, conducting 50+ cold interviews to make multiple pivots in product ideas.",
    "Overcame relentless technical roadblocks, driving a multi-sprint project to completion with no prior template, only determination and team collaboration.",
  ],
  images: [
    {
      src: StickyPixUrl,
      alt: "Image of StickyPix displaying a knight from Dark Souls",
      description: "StickyPix Displaying a Knight from Dark Souls",
    },
    {
      src: StickyPixDockedUrl,
      alt: "Image of StickyPix in its dock",
      description: "StickyPix while Docked",
    },
    {
      src: StickyPixGroupUrl,
      alt: "Image of StickyPix group members",
      description:
        "StickyPix Group Members (Left to Right: Amaan Singh, Giovanni Stagnaro, Sonia Fereidooni)",
    },
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/giovannistagnaro/SayIt-Assistant",
    },
  ],
  tech: ["C++", "ESP32", "JavaScript", "Soldering", "3D Printing", "AutoDesk"],
};

export const stickyPixCard: CardItem = {
  id,
  meta: "ECE 140A/140B",
  title,
  subtitle: "Hardware + Software",
  type: "project",
};
