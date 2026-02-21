import NetworkRackUrl from "../../../assets/images/privateMediaHub/network-rack.jpeg";
import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "privateMediaHub";
const title = "Private Media Hub";

export const privateMediaHubProject: Project = {
  id,
  title,
  description:
    "After completing my Pi-hole project, I wanted to deepen my understanding of networking while building something practical.  I decided to implement a Network-Attached Storage (NAS) solution to create centralized, scalable storage accessible from anywhere.\nI started by researching NAS architecture, storage configuration best practices, and secure remote access patterns.  I ultimately selected a UGreen NAS based on its hardware reliability, software ecosystem, and mobile management capabilities.  The system consists of: a NAS configured with HDD storage, containerization services using Docker, Jellyfin for media organization and streaming, and Tailscale for secure, remote access via a private mesh VPN.\nJellyfin was configured to organize and stream personal media content efficiently, while Tailscale enabled secure remote access without exposing services directly to the public internet.  Understanding Tailscale's internal IP addressing model and authentication flow was a key learning point during implementation.\nThere were many challenges involved, from troubleshooting container networking issues, solving port conflicts and service bindings, determining VPN routing and DNS resolution behavior, and connectivity inconsistencies between local and remote environments.  Resolving these issues required digging into Docker networking, firewall behavior, and service configuration details.\nI'm hoping to continue finding exciting projects to expand my home lab in the future, as these past couple projects have been a lot of fun and very rewarding.  This project reinforced several important engineering principles: designing systems with service isolation and clear boundaries, implementing secure remote access without public port forwarding, managing stateful services within containerized environments, and debugging connectivity issues across network layers.  As Dorothy said, there's no place like 192.168.1.1.",
  tldr: "Built a secure, self-hosted media hub using Docker, Jellyfin, Tailscale, and a NAS to enable private, remote access with full operational control.",
  highlights: [
    "Deployed and managed Docker containers for modular service architecture.",
    "Implemented secure remote access using Tailscale mesh VPN.",
    "Designed centralized storage architecture using NAS hardware.",
    "Improved understanding of network fundamentals.",
    "Gained hands-on experience troubleshooting multi-layer networking issues."
  ],
  images: [
    {
      src: NetworkRackUrl,
      alt: "Home network rack image",
      description: "My network rack.  Not the prettiest, but it's a start!",
    },
  ],
  links: [],
  tech: ["Docker", "Networking", "Tailwind"],
};

export const privateMediaHubCard: CardItem = {
  id,
  meta: "Network-Attached Storage",
  title,
  subtitle: "Complete",
  type: "project",
};
