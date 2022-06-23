import React from 'react';
import './container.css'
import Title from '../content/content';
import Picture from '../picture/picture';
import Infos from '../infos/infos';
import Creator from '../creator/creator';
class Container extends React.Component{
    render(){
        return(
            <div className="container">
                <Picture/>
                <Title/>
                <Infos/>
                <Creator/>
            </div>
        );
    }
}

export default Container