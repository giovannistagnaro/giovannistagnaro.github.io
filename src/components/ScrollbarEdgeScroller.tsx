import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { clamp } from "../utils/clamp";

export type CardRowProps = {
  children: React.ReactNode;
  scrollerRef: React.RefObject<HTMLDivElement | null>;
};

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const ScrollbarEdgeScroller = ({ children, scrollerRef }: CardRowProps) => {
  const [canScrollLeft, setCanLeft] = useState(false);
  const [canScrollRight, setCanRight] = useState(false);
  const hoverTimerRef = useRef<number | null>(null);

  const clickScrollPx = 420;

  function updateCanScroll() {
    const el = scrollerRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const left = el.scrollLeft;

    const eps = 2;
    setCanLeft(left > eps);
    setCanRight(left < maxScrollLeft - eps);
  }

  useEffect(() => {
    updateCanScroll();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => updateCanScroll();
    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => updateCanScroll());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [children]);

  function stopHoverScroll() {
    if (hoverTimerRef.current != null) {
      window.clearInterval(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }

  function startHoverScroll(direction: -1 | 1) {
    stopHoverScroll();

    const el = scrollerRef.current;
    if (!el) return;

    // Safari scrolls faster for some reason
    const step = isSafari ? 6 : 48;
    const intervalMs = 5;

    hoverTimerRef.current = window.setInterval(() => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const next = clamp(el.scrollLeft + direction * step, 0, maxScrollLeft);
      el.scrollLeft = next;

      if (next === 0 || next === maxScrollLeft) stopHoverScroll();
    }, intervalMs);
  }

  function scrollBy(direction: -1 | 1) {
    stopHoverScroll();

    const el = scrollerRef.current;
    if (!el) return;

    el.scrollBy({ left: direction * clickScrollPx, behavior: "smooth" });

    // restarts hover scroll
    window.setTimeout(() => {
      startHoverScroll(direction);
    }, 150);
  }

  return (
    <div className="relative">
      <div className="hidden md:block">
        <button
          type="button"
          aria-label="Scroll left"
          className={`  absolute left-0 top-4 h-88 w-16
                        bg-gradient-to-r from-zinc-950 to-transparent
                        flex items-center justify-center
                        transition-opacity 
                        ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}
                        z-1
                        `}
          onMouseEnter={() => startHoverScroll(-1)}
          onMouseLeave={stopHoverScroll}
          onFocus={() => startHoverScroll(-1)}
          onBlur={stopHoverScroll}
          onClick={() => scrollBy(-1)}
        >
          <span className="p-2">
            <ChevronLeft className="h-5 w-5 text-zinc-200" />
          </span>
        </button>

        <button
          type="button"
          aria-label="Scroll right"
          className={`  absolute right-0 top-4 h-88 w-16
                        bg-gradient-to-l from-zinc-950 to-transparent
                        flex items-center justify-center
                        transition-opacity 
                        ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}
                        z-1
            `}
          onMouseEnter={() => startHoverScroll(1)}
          onMouseLeave={stopHoverScroll}
          onFocus={() => startHoverScroll(1)}
          onBlur={stopHoverScroll}
          onClick={() => scrollBy(1)}
        >
          <span className="p-2">
            <ChevronRight className="h-5 w-5 text-zinc-200" />
          </span>
        </button>
      </div>
      {children}
    </div>
  );
};
export default ScrollbarEdgeScroller;
