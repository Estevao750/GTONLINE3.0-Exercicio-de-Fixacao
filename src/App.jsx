import "./App.css";
import { BotaoAprovado, BotaoReprovar } from "./components/Botoes";
import Sobre from "./components/Sobre";
import Cartoes from "./components/Cartoes";

function App() {
  return (
    <div className="container">
      <h1 className="titulo">Geração Tech 3.0</h1>
      <Sobre curso={"Geração Tech"} />
      <Cartoes>
        <p>Este é o conteúdo do cartão.</p>
      </Cartoes>
      <div className="botoes">
        <BotaoAprovado />
        <BotaoReprovar />
      </div>
    </div>
  );
}

export default App;
