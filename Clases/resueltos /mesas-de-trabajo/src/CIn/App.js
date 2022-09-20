import React , { Component } from "react" ;

export default class App extends Component {
  constructor(){
    super();
    this.state = {
        title:"HOLA",
        comment:"Soy un componente de clase"
    };
 }
 componentDidMount ( ) {
    this.setState ( { comment : "Soy un React Class Component" } ) ;
   } ;
 
 componentDidUnmount ( ) {
    console.log ( "El componente se desmontó" ) ;
 }

  render () {
    return (
      <div className = "container " >
        <p> { this.state.title } </p>
        <p> { this.state.comment} </p>
      </div>
      )
      }
    }