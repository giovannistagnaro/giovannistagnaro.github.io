export type CardRowProps = {
  title: string;
  children: React.ReactNode;
};
// className="p-4 h-100 flex space-x-8 overflow-hidden"
const CardRow = ({ title, children }: CardRowProps) => {
  return (
    <section className="p-2">
      <h1 className="px-8 text-red-500 font-bold text-[clamp(2.5rem,8vw,6rem)] w-max">
        {title}
      </h1>
      <div className="p-4 h-100 flex space-x-8 overflow-x-auto hide-scrollbar">{children}</div>
    </section>
  );
};
export default CardRow;
