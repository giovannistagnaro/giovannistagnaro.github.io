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
        imageSrc="https://preview.redd.it/duck-portraits-v0-z082eidw6t8c1.png?width=1080&crop=smart&auto=webp&s=7512752c7221b99d1c32757342d11ebaf79adf81"
      />
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
    </>
  );
}

export default App;
