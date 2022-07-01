import React from "react";
import { createPortal } from "react-dom";

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        elements: ["eau", "feu", "terre", "air", "glace"]
      };
      this.longueurTab = this.state.elements.length;

     
    }

    removeEl(){
      this.state.elements.pop()
      this.setState({
        elements: this.state.elements
       
      });
      this.longueurTab = this.state.elements.length;
    }
    
    
    render(){
      return(
        <div>
          <p>longueur du tableau: {this.longueurTab}</p>
          <button onClick={() => this.removeEl()}>supprimer élément</button>
        </div>
      );
      
      
    }
      
    


}

export default App;
