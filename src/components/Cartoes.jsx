import PropTypes from 'prop-types';

function Cartao(props) {
  return (
    <div style={{ border: '1px solid black', padding: '20px', borderRadius: '8px' }}>
      {}
      {props.children}
    </div>
  );
}

Cartao.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cartao;