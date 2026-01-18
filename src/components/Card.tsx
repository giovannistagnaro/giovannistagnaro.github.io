export type CardProps = {
  title: string;
  link: string;
};

const Card = ({ title, link }: CardProps) => {
  return (
    <>
      <div
        className=" flex flex-col items-center justify-center 
                    min-w-[30rem] h-full
                    border border-white/10 rounded-2xl 
                    shadow-lg shadow-black/40
                    hover:scale-102 hover:ring-2 hover:ring-violet-400 hover:border-violet-400
                    active:scale-98 
                    cursor-pointer
                    transition-transform
                    snap-start
                    bg-white/5
                    backdrop-blur-md
                    "
        onClick={() => console.log(`Clicked ${link}.`)}
      >
        <div className="flex flex-col justify-between h-full p-6 text-center text-neutral-400">
          <div className="text-sm">Meta</div>
          <div className="text-2xl font-semibold text-neutral-100">{title}</div>
          <div className="text-xs">Secondary Info</div>
        </div>
      </div>
    </>
  );
};
export default Card;
