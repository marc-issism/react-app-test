import { useState } from "react";

// useState returns 2 values [initial value, updating function]

const Home = () => {
    const [name, setName] = useState("Bob");
    let prev_name = ""
    const [count, setCount] = useState(0);

    const handleClick = (event_object) => {
        console.log("click handled", event_object);
        setName("Bob")
    }

    const handleClickWithArgument = (name, e) => {
        console.log("hello " + name, e)
        prev_name = name;
        setName("Allistaire");
        console.log("Changed name from " + prev_name + " to " + name);
    }


    return(
        <div className="home">
            <p>Home page</p>
            Name: {name} <br/>
            Counter: {count}
            <tr>
                <th>On click event</th>
                <td><button onClick={handleClick} onMouseOver={() => {setCount(count + 10)}}>CLICK</button></td>
            </tr>
            <tr>
                <th>Passing in an argument</th>
                <td><button onClick={(e) => {handleClickWithArgument(name, e)}}>CLICK</button></td>
            </tr>
           
            
        </div>
    );
}

/// Anonymous function
// if we use onClick={function(argument)} it will just run it.Home
// However, if we use an anonymous function it will link to that function which then runs what we need
// with the argument.
// () => {function(args)} 


export default Home;