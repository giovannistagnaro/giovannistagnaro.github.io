import "../App.css";
import Card from "../components/Card";
import CardRow from "../components/CardRow";
import Hero from "../components/Hero";

function App() {
  return (
    <>
      <Hero
        title="GIOVANNI STAGNARO"
        subtitle="B.S. Mathematics/Computer Science"
        imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F13041492%2Fpexels-photo-13041492.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D627%26fit%3Dcrop%26w%3D1200&f=1&nofb=1&ipt=f59b96e1d19739269c6002eb378be772d8c42bd8dc92dfe4b44f041de928aee7"
      />
      <div className="px-6 py-8 bg-linear-to-b from-neutral-950/95 to-neutral-700">
        <div>
          <CardRow title="Test Category">
            <Card title="Test Card" link="-" />
            <Card title="Test Card" link="-" />
            <Card title="Test Card" link="-" />
          </CardRow>
        </div>

        <div>
          <CardRow title="Test Category 2">
            <Card title="Test Card" link="-" />
            <Card title="Test Card" link="-" />
            <Card title="Test Card" link="-" />
          </CardRow>
        </div>

        <div>
          <CardRow title="Test Category 3">
            <Card title="Test Card" link="-" />
            <Card title="Test Card" link="-" />
            <Card title="Test Card" link="-" />
          </CardRow>
        </div>
      </div>
    </>
  );
}

export default App;
