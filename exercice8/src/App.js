import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      personnage1:{
        nom: "nom",
        prenom: "prenom",
        age: "21",
        phrase: "hoho",
      },
  
      personnage2:{
        nom: "nom2",
        prenom: "prenom2",
        age: "22",
        phrase: "hihi",
      },
  
      personnage3:{
        nom: "nom3",
        prenom: "prenom3",
        age: "23",
        phrase: "haha",
      }
  
    }
  
}
  render(){
    return (
      <div className="App">
          {this.state.personnage1.phrase}
          {this.state.personnage2.phrase}
          {this.state.personnage3.phrase}
      </div>
    );
  }
}


export default App;
