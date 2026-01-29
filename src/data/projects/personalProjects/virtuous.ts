import GameplayUrl from "../../../assets/images/virtuous/gameplay.png";
import DebugUrl from "../../../assets/images/virtuous/debug-mode.png";
import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "virtuous";
const title = "Virtuous";

export const virtuousProject: Project = {
  id,
  title,
  description:
    "Virtuous is a custom-built 2D tile-based game engine focused on deterministic simulation, AI behaviors, and data-driven rendering. It was implemented from scratch using React, TypeScript, Tailwind, and Vite.\nWhile Virtuous currently presents as a small roguelike-style game, the core goal is to explore engine architecture, simulation, and extensible systems design, rather than content-heavy gameplay.\nInspiration for style and theme were drawn primarily from classic games like Gauntlet (a favorite from my early childhood) and The Legend of Zelda (NES).\nI am a big fan of emergent gameplay (some great examples being Minecraft, Metal Gear Solid V, and Baldur's Gate 3) and always appreciate when game developers go the extra mile to give the world life. As Virtuous continues to develop, I aim to add more and more systems and rules that allow the player to draw out emergent moments.\nCurrently, the project is in an MVP stage; it is a playable demo showcasing what the engine has to offer.  I have many things I would like to add to it, especially to support the world-building.  Future sprint plans can be found in the README on GitHub.",
  tldr: "Stylized 2D Game Engine with Plans to Expand",
  highlights: [
    "Built a custom game engine featuring a decoupled simulation/render loop with deterministic updates and interpolation.",
    "Implemented a component-driven entity system supporting player and NPCs with shared movement, combat, inventory, and AI behaviors.",
    "Developed AI systems including vision-limited pathfinding, pursuit, fleeing, wandering, and state-based behavior transitions.",
    "Built a sprite rendering pipeline.",
    "Implemented a debug visualization mode that replaces sprites with colored primitives to aid AI, collision, and camera debugging.",
  ],
  images: [
    {
      src: GameplayUrl,
      alt: "Gameplay screenshot image",
      description: "Gameplay Screenshot",
    },
    {
      src: DebugUrl,
      alt: "Debug mode screenshot image",
      description: "Debug Render Screenshot",
    },
  ],
  links: [
    { label: "Virtuous", href: "https://giovannistagnaro.com/virtuous" },
    { label: "GitHub", href: "https://github.com/giovannistagnaro/virtuous" },
  ],
  tech: ["React", "Vite", "Tailwind"],
};

export const virtuousCard: CardItem = {
  id,
  meta: "2D Game Engine",
  title,
  subtitle: "MVP",
  type: "project",
};
