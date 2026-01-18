import { rows } from "../data/rows";
import type { CardItem } from "../types/content";

export function findCardById(id: string): CardItem | undefined {
  for (const row of rows) {
    const found = row.cards.find((card) => card.id === id);
    if (found) return found;
  }
  return undefined;
}
