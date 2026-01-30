import { motion, useScroll, useTransform } from "framer-motion";
import Card from "../components/Card";
import CardRow from "../components/CardRow";
import Hero from "../components/Hero";
import { rows } from "../data/rows";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.8], [0, 0]);

  return (
    <div className="min-h-screen bg-neutral-950 text-zinc-100">
      <Hero
        heroRef={heroRef}
        scrollYProgress={scrollYProgress}
        title="GIOVANNI STAGNARO"
        subtitle="B.S. Mathematics/Computer Science"
        imageSrc="/images/giovanniAlaska.jpg"
      />

      <motion.div style={{ opacity: contentOpacity, y: contentY }}>
        <div className="py-8 bg-neutral-950 bg-gradient-to-b from-black via-neutral-900 to-neutral-950">
          {rows.map((row) => (
            <section key={row.id} id={row.id}>
              <CardRow title={row.title}>
                {row.cards.map((card) => (
                  <Card key={card.id} card={card} />
                ))}
              </CardRow>
            </section>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
