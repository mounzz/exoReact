import React, {useState} from "react";
import './ContainerApp.css'

import ContainerProfil from "../ContainerProfil/ContainerProfil";
import ContainerWidget from "../containerWidget/ContainerWidget";

function ContainerApp() {
    
    const [timeframe, setTimeframe] = useState('daily');
    
    
    return(
        <div className="containerApp">
        <ContainerProfil onSelectTimeframe={setTimeframe}/>
        <ContainerWidget timeframe={timeframe}/>
        </div>
        );
    }
    
    export default ContainerApp