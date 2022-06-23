import React from 'react';
import Ethereum from '../ethereum/ethereum';
import Time from '../time/time';
import './infos.css'
class Infos extends React.Component{
    render(){
        return(
            <div className='containerInfo'>
                <Ethereum/>
                <Time />
            </div>
        );
    }
}

export default Infos