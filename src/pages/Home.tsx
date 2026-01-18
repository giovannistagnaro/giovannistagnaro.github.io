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
        imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F13041492%2Fpexels-photo-13041492.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D627%26fit%3Dcrop%26w%3D1200&f=1&nofb=1&ipt=f59b96e1d19739269c6002eb378be772d8c42bd8dc92dfe4b44f041de928aee7"
      />
      <div className="py-8 bg-neutral-950 bg-gradient-to-b from-neutral-900/90 to-neutral-950 ">
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
