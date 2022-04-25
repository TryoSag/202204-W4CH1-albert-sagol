import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import Info from "./components/Info/Info";
import gentlemans from "./gentlemans";

function App() {
  const titleText = "The pointing gentlemen";
  const infoText = "gentlemen pointing at you";
  const buttonText = "Select all";
  const gentlemenSelected = 0;

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">{titleText}</h1>
      </header>
      <section className="controls">
        <Info number={gentlemenSelected} text={infoText} className="info" />
        <Button text={buttonText} className="button button--select" />
      </section>
      <main className="main">
        <ul className="gentlemen">
          <Gentleman gentleman={gentlemans[0]} />
          <Gentleman gentleman={gentlemans[1]} />
          <Gentleman gentleman={gentlemans[2]} />
        </ul>
      </main>
    </div>
  );
}

export default App;
