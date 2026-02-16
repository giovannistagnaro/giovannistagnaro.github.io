import NetworkRackUrl from "../../../assets/images/privateMediaHub/network-rack.jpeg";
import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "privateMediaHub";
const title = "Private Media Hub";

export const privateMediaHubProject: Project = {
  id,
  title,
  description:
    "After completing my Pi-hole project, I wanted to expand my home lab setup so that I could learn more about networking while having something cool to show for it.  After much research, I decided to work on implementing a NAS so that I could have a centralized storage for all my device that also gives me access wherever I happen to be.\nI started by researching what a Network-Attached Storage (NAS) is, how to set one up, and best practices for using one.  I settled on a UGreen NAS, as they have good quality hardware and a good software selection with a very nice mobile app.  The setup process for this was mostly straightforward; I setup the HDD, installed some tools, and created isolated Docker containers for Jellyfin and Tailscale to ensure smooth and efficient management of remote data.  After this, I configured Jellyfin, allowing for easy organization and streaming of personal media content.  Tailscale was also easy to setup after figuring out how their local IP system works and creating a couple account.\nThere were many network issues and connection problems I had to troubleshoot and the docker images also ran into some roadblocks, but after much troubleshooting, I ended up with the network rack shown below!  I'm excited to have centralized storage that I can access anywhere without any subscriptions and I'm thankful for the opportunity to take on the challenge of learning about a new subject I haven't had experience with before.\nI'm hoping to continue finding exciting projects to expand my home lab in the future, as these past couple projects have been a lot of fun and very rewarding.  As Dorothy said, there's no place like 192.168.1.1.",
  tldr: "Built a secure, self-hosted media hub using Docker, Jellyfin, Tailscale, and a NAS for private, remote access and seamless management.",
  highlights: [
    "Gained hands-on experience with setting up and managing services in isolated Docker containers for efficiency and scalability.",
    "Learned how to implement secure, remote access to my media setup using Tailscale VPN, enhancing privacy and simplifying networking.",
    "Learned how to integrate network-attached storage for scalable, centralized storage solutions.",
    "Developed a deeper understanding of network protocols.",
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
