import DayViewUrl from "../../../assets/images/viaggiorni/day-view.png";
import IndexUrl from "../../../assets/images/viaggiorni/index.png";
import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "viaggiorni";
const title = "Viaggiorni";

export const viaggiorniProject: Project = {
  id,
  title,
  description:
    "Viaggiorni is a private, encrypted desktop journal for macOS, Windows, and Linux. It is local-first by design: no accounts, no telemetry, no tracking. The database is SQLCipher-encrypted, photos are AES-encrypted on disk, and the password is never stored. The only optional outbound traffic is to a local Ollama instance, if you happen to have one running.\nI built Viaggiorni because every journaling app I tried wanted an account, a subscription, or a server. I wanted something that felt like the paper notebook on my desk, but with the things only software can offer: secure storage, photos, habit streaks, a real calendar. The aesthetic leans into that intent: two-page spreads, dog-ear bookmarks, vintage paper textures, and hand-cut decorative stamps placed at random from a bundled set.\nv1.0.0 shipped in May 2026 with installers for all major platforms on the Releases page. A customizable daily template lets users choose which widgets (habit tracker, todo list, mood, photos, word of the day) and writing sections appear on every new day, so the journal can be as light or as structured as they want it to be.",
  tldr: "A private, encrypted desktop journal that feels like a real notebook. Local-first, with no accounts and no tracking.",
  highlights: [
    "End-to-end encryption: SQLCipher for the database, AES for photos, PBKDF2-HMAC-SHA512 key derivation (220k iterations, 256-bit key). Password is never stored.",
    "Strict Electron main / preload / renderer separation via contextBridge; the renderer never imports from main, which lets the entire main process be unit-tested in Node without spinning up Electron.",
    "End-to-end type safety: TypeScript types are inferred directly from the Drizzle schema and shared across main, preload, and renderer.",
    "604 unit tests with Vitest and React Testing Library covering main-process queries, IPC handlers, and renderer components.",
    "GitHub Actions CI runs typecheck, lint, and the full test suite. Tagging v* triggers a multi-OS build and release pipeline that produces .dmg, .msi, .AppImage, and .deb installers and attaches them to a GitHub Release.",
    "Viaggiorni comes from the Italian words 'viaggio' (meaning journey) and 'giorni' (meaning days). At the risk of sounding cliché, every day in life is a journey."
  ],
  images: [
    {
      src: DayViewUrl,
      alt: "A two-page Viaggiorni day spread showing to-do, mood, habits, word of the day, and writing sections.",
      description: "Daily Entry Spread",
    },
    {
      src: IndexUrl,
      alt: "A two-page Viaggiorni spread showing the month calendar with dot indicators on written days and the bookmarked entries list.",
      description: "Calendar and Bookmarks Spread",
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/giovannistagnaro/viaggiorni" },
    { label: "Releases", href: "https://github.com/giovannistagnaro/viaggiorni/releases" },
  ],
  tech: ["React", "TypeScript", "Tailwind", "Electron", "SQLite", "Drizzle", "Vitest"],
};

export const viaggiorniCard: CardItem = {
  id,
  meta: "Encrypted Desktop Journal",
  title,
  subtitle: "Complete",
  type: "project",
};
