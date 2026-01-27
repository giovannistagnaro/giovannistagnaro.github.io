import { useNavigate } from "react-router-dom";
import type { CardItem } from "../types/content";

export type CardProps = {
  card: CardItem;
};

const Card = ({ card }: CardProps) => {
  const navigate = useNavigate();

  function handleActivate() {
    console.log("activated ", card.id);
    switch (card.type) {
      case "external": {
        window.open(card.href, "_blank", "noopener, noreferrer");
        return;
      }
      case "pdf": {
        navigate(`/pdf/${card.id}`);
        return;
      }

      case "project": {
        console.log(`/projects/${card.id}`);
        navigate(`/projects/${card.id}`);
        return;
      }
    }
  }

  return (
    <>
      <button className="site-card" onClick={handleActivate}>
        <div className="flex flex-col justify-between h-full p-6 text-center text-neutral-400">
          <div className="text-sm uppercase tracking-wide">{card.meta}</div>
          <div className="text-2xl font-semibold text-zinc-100">
            {card.title}
          </div>
          <div className="text-xs">{card.subtitle}</div>
        </div>
      </button>
    </>
  );
};
export default Card;
