import React from "react";
import "./App.css"
import Articles from "./components/articles/Articles"
import Panier from "./components/panier/Panier"
import pasteque from "./images/pasteque.png"
import mangue from "./images/mango.png"
import fraise from "./images/fraises.png"


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      argent: 20,
      panier: [],
      articles: [
        {
          nom: "fraise",
          prix: 2.50,
          stockDispo: 5,
          img: fraise

        },
        {
          nom: "pastèque",
          prix: 2,
          stockDispo: 10,
          img: pasteque
        },
        {
          nom: "mangue",
          prix: 3,
          stockDispo: 10,
          img: mangue
        }
      ]
    }
  }

  acheter = (produit) => {
    if (produit.stockDispo > 0) {
      if (this.state.argent >= produit.prix) {
        this.state.argent -= produit.prix;
        produit.stockDispo--;
        this.ajouterPanier(produit);
        this.setState({
          argent: this.state.argent 
        })
      } else {
        console.log("pas de sous");
      }
    } else {
      console.log("pas de stock");
    }
   
  }

  ajouterPanier = (produit) => {
    this.state.panier.push(produit)
    console.log(produit)
    this.setState({
      panier: this.state.panier
      
    })
  }

  remettreArticle = (produit) => {
    let indexProduit = this.state.panier.indexOf(produit);
    this.state.panier.splice(indexProduit, 1);
    
    this.state.argent += produit.prix;
    produit.stockDispo++
  
    this.setState({
      argent: this.state.argent,
      panier: this.state.panier
    })
  }

  // noMoney = (produit) =>{
  //     if(this.state.argent === 0){
  //       return 'none'
  //     }else{
  //       return
  //     }
  // }

  render(){
    return (
      <div className="App">
          <div className="money">mon argent: {this.state.argent}€</div>
          <Articles acheter={this.acheter} articleData={this.state.articles} money={this.state.argent} />
          <Panier remettre={this.remettreArticle} panier={this.state.panier} />
      </div>
    );
  }
}
  


export default App;
