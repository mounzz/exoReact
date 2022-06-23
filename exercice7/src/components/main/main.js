import React from "react";
import Article from "../article/article";

class Main extends React.Component {

    nbArticle = (nbrArticle) => {
        console.log(nbrArticle);
    }

    nombreArticle = 2;
    render(){


    

    if(this.nombreArticle >= 2){
        return(
        <main>
            <Article farticle={(x) => this.nbArticle(x)} titre ="les tartines"/>
            <Article farticle={(x) => this.nbArticle(x)} titre ="coding school"/>
            </main>
            );
    }else{
        return( <h1>il n'y a pas d'article</h1>);
       
    }

    }
}

export default Main