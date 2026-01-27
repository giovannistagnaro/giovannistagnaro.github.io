export type CardType = "route" | "external" | "pdf";

export type CardItem =
  | {
      id: string;
      title: string;
      meta?: string;
      subtitle?: string;
      type: "external";
      href: string;
    }
  | {
      id: string;
      title: string;
      meta?: string;
      subtitle?: string;
      type: "pdf";
      pdfSrc: string;
    }
  | {
      id: string;
      title: string;
      meta?: string;
      subtitle?: string;
      type: "project";
    };
export type CardRowModel = {
  id: string;
  title: string;
  cards: CardItem[];
};
