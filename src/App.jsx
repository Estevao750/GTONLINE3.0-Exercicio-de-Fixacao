import "./App.css";
import { BotaoAprovado, BotaoReprovar } from "./components/Botoes";
import Sobre from "./components/Sobre";

function App() {
  return (
    <div className="container">
      <h1 className="titulo">Geração Tech 3.0</h1>
      <Sobre curso={"Geração Tech"} />
      <div className="botoes">
        <BotaoAprovado />
        <BotaoReprovar />
      </div>
    </div>
  );
}

export default App;
