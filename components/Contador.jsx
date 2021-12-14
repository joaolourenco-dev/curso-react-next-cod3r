import { Component } from "react";

export default class Contador extends Component {

  state = {
    numero: this.props.valorInicial ?? 0
  }

  inc() {
    this.setState({
      numero: this.state.numero + 1
    })
  }

  render() {
    return (
      <div>
        <h1>contador (usando classe)</h1>
        <h2>{this.state.numero}</h2>
        <button onClick={() => this.inc()}>+</button>
      </div>
    )
  }
}