import Card from "../components/Card";
import CardRow from "../components/CardRow";
import Hero from "../components/Hero";
import { rows } from "../data/rows";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-zinc-100">
      <Hero
        title="GIOVANNI STAGNARO"
        subtitle="B.S. Mathematics/Computer Science"
        imageSrc="/images/giovanniAlaska.jpg"
      />
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
    </div>
  );
}
