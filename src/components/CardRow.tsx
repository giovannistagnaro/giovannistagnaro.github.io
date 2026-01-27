export type CardRowProps = {
  title: string;
  children: React.ReactNode;
};

const CardRow = ({ title, children }: CardRowProps) => {
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
      <div
        tabIndex={-1}
        className=" flex
                    px-6 py-8 space-x-6
                    h-80 sm:h-100
                    overflow-x-auto hide-scrollbar scroll-px-8 overflow-y-hidden
                    snap-x snap-proximity
                    scroll-smooth"
      >
        {children}
      </div>
    </section>
  );
};
export default CardRow;
