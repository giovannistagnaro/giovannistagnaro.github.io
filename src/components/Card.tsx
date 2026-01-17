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
                    border-4 border-red-500 rounded-lg 
                    hover:scale-102 hover:ring-2 hover:ring-red-200
                    active:scale-98 
                    cursor-pointer
                    transition-transform"
        onClick={() => console.log(`Clicked ${link}.`)}
      >
        <div>
          <h1 className="text-red-500 font-bold text-[clamp(4rem,8vw,6rem)] text-center">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};
export default Card;
