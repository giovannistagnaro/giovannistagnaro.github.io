export type CardRowProps = {
  title: string;
  children: React.ReactNode;
};
// className="p-4 h-100 flex space-x-8 overflow-hidden"
const CardRow = ({ title, children }: CardRowProps) => {
  return (
    <section className="p-2">
      <h2
        className=" px-8 w-max
                    text-neutral-400 text-lg 
                    font-semibold
                    tracking-wide"
      >
        {title}
      </h2>
      <div
        className=" flex
                    px-6 py-8 space-y-4 space-x-6
                    h-100 
                    overflow-x-auto hide-scrollbar scroll-px-8 overflow-y-hidden
                    snap-x snap-mandatory"
      >
        {children}
      </div>
    </section>
  );
};
export default CardRow;
