import NetworkSetupUrl from "../../../assets/images/pihole/network-setup.png";
import RaspberryPiUrl from "../../../assets/images/pihole/raspberry-pi.png";
import PiholeDashboardUrl from "../../../assets/images/pihole/pihole-dashboard.png";
import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "pihole";
const title = "Pi-hole";

export const piholeProject: Project = {
  id,
  title,
  description: "This project began as a simple goal: reduce ads and tracking across my home network.  It evolved into a hands-on introduction to DNS, routing, and home network architecture.\nUsing a Raspberry Pi Zero W, I implemented and deployed Pi-hole as the primary DNS resolver for my network.  This required configuring the router to use the Pi-hole as the default DNS server, managing blocklists and domain filtering rules, monitoring DNS query logs and traffic analytics, and troubleshooting DNS resolution and connectivity issues.\nThroughout this process, I gained practical experience with DNS resolution flow, DHCP configuration and IP assignment, local network topology, router vs modem responsibilities, and Linux system administration (SSH, service management, updates).  There were several roadblocks along the way: hardware limitations, DNS misconfigurations causing temporary connectivity loss, understanding the distinction between modem and router roles, and ensuring reliable uptime for a shared infrastructure service.  After resolving these issues, I successfully deployed a stable Pi-hole instance that now blocks ads, trackers, and malicious domains at the network level, improving both privacy and performance.\nWhat started as a small privacy experiment became the foundation of my home lab and sparked a deeper interest in infrastructure and systems design.",
  tldr: "Deployed a self-hosted Pi-hole DNS server to provide network-wide ad, tracker, and malicious domain blocking across all devices",
  highlights: [
    "Implemented a reliable, always-on network service.",
    "Strengthened understanding of DNS, DHCP, and IP addressing.",
    "Gained experience configuring routers and local networking hardware.",
    "Developed troubleshooting skills across multiple network layers",
    "Improved network-wide privacy and browsing performance."
  ],
  images: [
    {
      src: PiholeDashboardUrl,
      alt: "Image of Pi-hole dashboard, showing queries and blocked domain counts.",
      description:
        "Pi-hole dashboard with a cool Star Trek theme I found in the settings.",
    },
    {
      src: NetworkSetupUrl,
      alt: "Image of network setup including modem, router, and Raspberry Pi",
      description: "Current network setup.",
    },
    {
      src: RaspberryPiUrl,
      alt: "Image of Raspberry Pi Zero W being used as a Pi-hole",
      description: "Raspberry Pi being used as a Pi-hole",
    },
  ],
  links: [],
  tech: ["Raspberry Pi", "Pi-hole", "Networking"],
};

export const piholeCard: CardItem = {
  id,
  meta: "",
  title,
  subtitle: "Complete",
  type: "project",
};
