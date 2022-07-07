function Persos({lol, rename}){




    return(
        <div>
            Je m'appelle {lol.prenom} {lol.nom}, j'ai {lol.age}, je vis à {lol.commune}
            <button onClick={rename}>click</button>
        </div>
    );
}

export default Persos