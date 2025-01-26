import { useState, useEffect } from "react";
import useCounter from "./useCounter";
import axios from "axios";
import Result from "./Result";

const LINK = "https://retro.umoiq.com/service/publicJSONFeed?command=predictions&a=ttc&stopId=";



export default function Transit() {

    const [input,setInput] = useState("");
    const [data, setData] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() =>  {
    }, [response])

    function apiQuery(e) {
        e.preventDefault();
        axios.get(LINK + input).then(res => {
            setData(res.data);
            setResponse(res);

        })
    }
    

    const handleChange  = (e) => {
        setInput(e.target.value);
    }

    

   
    const {count, increment, decrement} = useCounter(0);

    return(
        <div className="transit">
            <h3>Stop #</h3>
            <form onSubmit={apiQuery}>
                <input type="text" id="stopQuery" value={input} onChange={handleChange}></input>
                {/* <p>Current input  = {input}</p> */}
                <br/>
                {/* <button type="submit">OK</button> */}
            </form>

            <Result disabled={data===null} data={data}/>

            {/* <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <br/>
            <button onClick={decrement}>decrement</button>
            <br/> */}

            {

            }

        </div>
    );
}






