import React from "react";
import Perso from "./components/perso";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      personnage1:{
          nom: "snow",
          prenom: "jon",
          age: "15 ans",
      },
      personnage2:{
          nom: "stark",
          prenom: "arya",
          age: "9 ans",
      },
      personnage3:{
          nom: "stark",
          prenom: "robb",
          age: "15 ans",
      }
  }
  }

  ChangeContentParent = () => {
    this.setState({
      personnage1:{
        nom: "snow",
        prenom: "ramsay",
        age: "19 ans",
    },
    personnage2:{
        nom: "stark",
        prenom: "sansa",
        age: "12 ans",
    },
    personnage3:{
        nom: "stark",
        prenom: "eddard",
        age: "36 ans",
    }
    })
  }

  render() {
    return (
      <div className="App">
        <Perso 
        perso1={this.state.personnage1}
        perso2={this.state.personnage2}
        perso3={this.state.personnage3}
        changeContent={this.ChangeContentParent}/> 
      </div>
    );
  }
}


export default App;