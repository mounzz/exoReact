import React from "react";


class App extends React.Component {

  state = {
    heure: new Date()
  };

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        heure: new Date()
      })
    }, 1000)
  }


 render(){
  return (
    <div className="App">
        Il est: {this.state.heure.getHours()}:{this.state.heure.getMinutes()}:{this.state.heure.getSeconds()}.
    </div>
  );
 }
  
}

export default App;
