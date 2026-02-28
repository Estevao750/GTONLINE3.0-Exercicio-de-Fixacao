import PropTypes from "prop-types";

function Sobre(props) {
  return (
    <div className="sobre">
      <h2>Sobre o projeto</h2>
      <p>
        Este projeto foi desenvolvido para fins de aprendizado na {props.curso}.
      </p>
      <ul className="lista">
        <li>Criar e utilizar componentes em um projeto React.</li>  
        <li>Exportar e importar múltiplos componentes de um único arquivo.</li>  
        <li>Trabalhar com props para passar dados para os componentes.</li>  
        <li>Utilizar props.children para renderizar conteúdo aninhado dentro de um componente.</li>  
      </ul>
    </div>
  );
}

Sobre.propTypes = {
  curso: PropTypes.string,
};

export default Sobre;
