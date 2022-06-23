import React from 'react'
import './creator.css'
import Picture from './images/image-avatar.png'

class Creator extends React.Component{
    render(){
        return(
            <div className='containerCreator'>
                <img className='picCreator' src={Picture}/> 
                <p>
                    Creation of <span className='creatorName'>Jules Wyvern.</span>
                </p>
            </div>
        );
    }
}

export default Creator