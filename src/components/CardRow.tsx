import { useRef } from "react";
import ScrollbarEdgeScroller from "./ScrollbarEdgeScroller";

export type CardRowProps = {
  title: string;
  children: React.ReactNode;
};

const CardRow = ({ title, children }: CardRowProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="focus:none">
      <h2
        className=" px-8 w-max
                    text-zinc-300 text-lg 
                    font-semibold
                    tracking-wider
                    uppercase
                    font-merriweather
                    font-bold
                    "
      >
        {title}
      </h2>

      <ScrollbarEdgeScroller scrollerRef={scrollerRef}>
        <div
          tabIndex={-1}
          className=" flex
                      px-6 pt-4 pb-8 space-x-6
                      h-80 sm:h-100
                      overflow-x-auto hide-scrollbar scroll-px-8 overflow-y-hidden
                      scroll-smooth"
          ref={scrollerRef}
        >
          {children}
        </div>
      </ScrollbarEdgeScroller>
    </section>
  );
};
export default CardRow;
