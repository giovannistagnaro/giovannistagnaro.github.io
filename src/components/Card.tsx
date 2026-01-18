import { useNavigate } from "react-router-dom";
import type { CardItem } from "../types/content";

export type CardProps = {
  card: CardItem;
};

const Card = ({ card }: CardProps) => {
  const navigate = useNavigate();

  function handleActivate() {
    switch (card.type) {
      case "external": {
        window.open(card.href, "_blank", "noopener, noreferrer");
        return;
      }
      case "pdf": {
        navigate(`/pdf/${card.id}`);
        return;
      }

      case "route": {
        navigate(card.route);
        return;
      }
    }
  }

  return (
    <>
      <button
        className=" flex flex-col items-center justify-center 
                    shrink-0
                    w-80 sm:w-120
                    border border-zinc-800 rounded-2xl 
                    shadow-lg shadow-black/40
                    hover:scale-102 hover:ring-2 hover:ring-violet-400 hover:border-violet-400 hover:bg-zinc-800
                    active:scale-98 active:ring-2 active:ring-violet-400 active:border-violet-400 active:bg-zinc-800
                    focus:outline-none focus:ring-2 focus:ring-violet-400
                    cursor-pointer
                    transition-all duration-200 ease-out
                    snap-start
                    bg-zinc-900
                    font-merriweather
                    "
        onClick={handleActivate}
      >
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
