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
  description:
    "Implemented and deployed a Pi-hole DNS server to provide network-wide ad, tracker, and malicious domain blocking across all devices.  Gained hands-on experience with DNS resolution, Linux system administration, and home networking by configuring the service as the primary DNS provider, managing blocklists, and monitoring real-time traffic.  Used logs and dashboards to analyze network behavior, troubleshoot connectivity issues, and improve privacy and performance.  This project strengthened my practical skills in network fundamentals, security awareness, and maintaining a shared infrastructure service with minimal downtime.\nInitially, I started this project because I am a privacy-conscious individual who got fed up with seeing ads and trackers all over the internet.  I found out about Pi-holes and since I had a spare Raspberry Pi Zero W hanging around, I figured it would be a cheap and rewarding project for the benefits it provides. However, there were roadblocks every step of the way.  At first, my ISP-provided gateway did not have enough ethernet ports, so I had to do some research before learning about network switches and how to use them (I know now this is basic, but I knew very little about networking before starting this project). From here, it turned out that the ISP gateway also did not have proper customization for DNS/DHCP, so after more research, I settled on a router that would provide me the customization I need... only to learn the hard way that a router needs a modem to work. I always thought they were more or less the same thing, but learning is the theme of this project. So, after finally obtaining all the necessary components, properly configuring the Pi and SSH, and spending some time in the router's settings, I finally ended up with a functional Pi-hole that blocks ads, trackers, and malware. This project ended up being much more of a time & money pit than I had anticipated but in the end, the experience, learning process, and end result made it all worth it. Additionally, I must say I am impressed with how effective such a tiny, cheap board like a Pi Zero W can be.",
  tldr: "Network-wide tracker and ad blocker",
  highlights: [
    "Learned more about networking, including DNS, DHCP, IP addressing, and how devices interact on a local network.",
    "Improved network privacy and overall browsing experience.",
    "Beginning of IT home lab.",
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
