import React from 'react';
import './picture.css'
import Image from './images/image-equilibrium.jpg'
import Eye from './images/icon-view.svg'

class Picture extends React.Component{

    backgroundhover(e){
        e.target.classList.add("eyeHover");
    }

    backgroundhoverOut(e){
        e.target.classList.remove("eyeHover");
    }

    render(){
        return(
            <div onMouseEnter={this.backgroundhover} onMouseLeave={this.backgroundhoverOut} className='containerImage'>                
                <div className='eye'>
                    <img src={Eye} className="eyePic" />
                </div>

            </div>
        );
    }
}

export default Picture