type HeroProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
};

const Hero = ({ title, subtitle, imageSrc }: HeroProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={imageSrc}
        alt="background image alt tag"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/95"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <div className="max-w-5xl text-center transform translate-y-[150%]">
          <h1 className="font-italiana text-white font-black text-[clamp(2.5rem,8vw,6rem)]">
            {title}
          </h1>
          {subtitle && (
            <p className="font-italiana text-white font-light text-[clamp(1rem,4vw,3rem)] mt-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div
        className="
          absolute bottom-6
          w-full
          flex justify-center
          text-white/60
          text-[clamp(1rem,4vw,3rem)]
          animate-bounce
        "
      >
        ↓
      </div>
    </section>
  );
};
export default Hero;
