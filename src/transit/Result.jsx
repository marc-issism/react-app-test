import { useEffect, useState } from "react";

export default function Result(props)  {

    let info = props.data;

    if (info != null) {
        if (info.prediction != undefined) {
            info = info.prediction;
            console.log("info.prediction is defined");
        }
        else if (info.direction != undefined) {
            info = info.direction;
            console.log("info.direction is defined");
        }
        else {
            info  = info.predictions;
            console.log("info.predictions is defined");
        }
    }
   



        if (info === null) {
            return(<></>);
        }
        else {
            return(
                <div className="result">
                    {JSON.stringify(info)}
                    <br/>
{/* 
                    {
                        info.direction.map((i)=>{
                            return(
                                <>
                                    <Route routeName={i.title}/>
                                    <Predictions data={i}/>
                                </>

                            );
                        })
                    } */}
                </div>
            );
        }
   


}

const Route = (props) => {
    return(
        <div className="route">
            <h3>{props.routeName}</h3>
            
        </div>
    );
}

const Predictions = (props) => {

    const info = props.data;
    const predictionArray = [];
    const [predictionStateArray, setPredictionStateArray] = useState([]);

    for(let i=0; i<info.prediction.length; i++){
        predictionArray.push(info.prediction[i].minutes);
        
    }

    useEffect(()=>{
        setPredictionStateArray(predictionArray)
    },[info])

    return(
        <div className="prediction">
            {predictionStateArray.map((time)=>{
                return(<p>{time} minutes</p>)
            })}
            
        </div>
    );
}