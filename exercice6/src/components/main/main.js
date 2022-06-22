import React from "react";
import Article from "../article/article";

class Main extends React.Component {

    nombreArticle = 1;
    render(){


    

    if(this.nombreArticle >= 2){
        return(
        <main>
            <Article/>
            <Article/>
            </main>
            );
    }else{
        return( <h1>il n'y a pas d'article</h1>);
       
    }

    }
}

export default Main