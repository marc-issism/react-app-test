import { useState } from "react";

export default function Legend(props) {
    return(
        <div className="legend">

            <h2>Legend</h2>

            {props.legendList.map((currentLegend)=>{
                return(
                    <LegendItem color={currentLegend.color} activity={currentLegend.activity} code={currentLegend.code}/>
                );
            })}
        </div>
    );
}

const LegendItem = (props) =>  {
    return(
        <div className="legendItem">

            <div className="colorCircle" style={{backgroundColor:props.color}}>

            </div>

            <div className="legendItemActivity">{props.activity}</div>

            <div className="legendItemCode">{props.code}</div>

            <p></p>

        </div>
    );
}


