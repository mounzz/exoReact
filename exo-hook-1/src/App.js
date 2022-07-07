import React, {useState} from 'react'
import Persos from './components/Persos';
import Articles from './components/Articles';


function App() {

  const [data, setData] = useState({
    nom: "Lol",
    prenom: "mdr",
    age: 7,
    commune: "jette",

  })

  let rename =() => {
    setData({
      nom: "Ptdr",
      prenom: "xD",
      age: 9,
      commune: "molenbeek",
    })
  }

  const [articles] = useState([
    {prenom: "felix", maison: "blue lion"},
    {prenom: "sylvain", maison: "blue lion"},
    {prenom: "claude", maison: "golden deer"},
    {prenom: "hilda", maison: "golden deer"},
    {prenom: "linhardt", maison: "black eagle"},

  ])

  return (
    <div className="App">
      <Persos lol={data} rename={rename}/>

    {articles.map((el, i)=>{
      return <Articles key={i} article={el}/>
    })}

    </div>
  );
}

export default App;
