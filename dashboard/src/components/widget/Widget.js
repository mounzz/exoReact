import React from "react";
import './Widget.css'


function Widget({data, img, color, timeframe}){

    return(
        <div className="containerWidget">
            <div className="widget">
                <div className="headling" style={{backgroundColor: color}}>
                    <img className="imgHeadling" src={img} />
                </div>
                <div className="content">
                    <div className="title">
                        {data.title}
                    </div>
                    <div className="infos">
                        <div className="hours">
                        {data.timeframes[timeframe].current}hrs
                        </div>
                        <div className="time">
                        {data.timeframes[timeframe].previous}hrs
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
}

export default Widget;