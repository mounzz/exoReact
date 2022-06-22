import React from "react";
import "./article.css"
import Image from "./images/tartine.png"

class Article extends React.Component{
    render(){
        return(
            <article>
                <div className="containerArticle">
                    <div className="imgArticle">
                        <img className="iconsArticle" src={Image} />
                    </div>
                    <div className="ContainerTexte">
                        <div className="sousTitre">Quel est le titre?</div>
                        <h1>Mon premier article</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci, necessitatibus eius molestiae maxime excepturi inventore praesentium voluptate nobis quis culpa eligendi harum autem rem officia nostrum totam. Recusandae, qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci, necessitatibus eius molestiae maxime excepturi inventore praesentium voluptate nobis quis culpa eligendi harum autem rem officia nostrum totam. Recusandae, qui.
                        </p>
                    </div>
                </div>
            </article>
        );

    }
}

export default Article