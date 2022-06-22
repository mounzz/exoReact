import React, {Component} from "react";

class App extends Component {
  render(){
    let date = new Date;

    return(
      <div>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</div>
    );
  }
}

export default App;
