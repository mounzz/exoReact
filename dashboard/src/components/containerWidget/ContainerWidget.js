import React from "react";
import './ContainerWidget.css'
import Widget from "../widget/Widget";
import data from '../../data.json'
import work from './images/icon-work.svg'
import play from './images/icon-play.svg'
import study from './images/icon-study.svg'
import exercice from './images/icon-exercise.svg'
import social from './images/icon-social.svg'
import selfcare from './images/icon-self-care.svg'


class ContainerWidget extends React.Component{
    render(){
        const widgets = [];
        const colors = ["#ff8b64", "#56c2e6", "#ff5e7d", "#4bcf83", "#7235d1", "#f1c75b"];
        const img = [work, play, study, exercice, social, selfcare];
        
        for(let i = 0; i < data.length; i++){
            widgets.push(
                <Widget 
                    data={data[i]} 
                    img={img[i]} 
                    color={colors[i]}
                    timeframe={this.props.timeframe}
                />);
            }
            
            
            return(
                <div className="containerWidgets">
                {widgets}
                </div>
                );
            }
        }
        
        export default ContainerWidget