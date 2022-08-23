import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: "Recibiendo pedido...", 
      show: true
    };
  }

  cancelOrder = () => {
    this.setState({show: false});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: "Pizzas"})
    }, 2000)
    console.log("Componente inicializado")
  }
  componentDidUpdate() {
    console.log("Componente actualizado");
  }
  render() {
    let pedido;
    if (this.state.show) {
      pedido = <Child food={this.state.mounted}/>;
    }
    return (
      <div>
      {pedido}
      <button type="button" onClick={this.cancelOrder}>Cancelar pedido.</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("Tu pedido ha sido cancelado.");
    console.log("Componente desmontado")
  }
  render() {
    return (
      <h1>Tu pedido: {this.props.food}</h1>
    );
  }
}

export default App;