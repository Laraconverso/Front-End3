import React from "react";

const lista = ["HOLA", "HOLA", "HOLA", "MUNDO"];

class App extends React.Component {
  render() {
    return (
      <div>
        {lista.map((elemento, index) => (
          <h1 style={{ color: "blue", textAlign: "center" }} key={`id${index}`}>
            {elemento}
          </h1>
        ))}
      </div>
    );
  }
}

export default App;