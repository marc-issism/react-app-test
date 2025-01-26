
//usable react components
//https://projects.wojtekmaj.pl/react-time-picker/ -> Calendar, Time Ranges,  etc.
//https://dndkit.com/ -> Drag and Drop
//https://mui.com/material-ui/react-slider/ -> Sliders
//https://mui.com/  -> Buncha components
//scroll drag https://www.joshuawootonn.com/react-drag-to-select#preventing-scroll-overflow
//https://react-bootstrap.netlify.app/docs/components/dropdowns/ -> dropdown
//https://developer.auth0.com/resources/guides/spa/react/basic-authentication -> authentication
//https://stackoverflow.com/questions/68369069/react-make-backend-api-call-when-user-is-authenticated-use-localstorage-if-no -> user-specific api calls


// A recommended order in your CSS to not cause any trouble is the following:
// a
// a:visited { ... }
// a:focus { ... }
// a:hover { ... }
// a:active { ... }

import { useState, useEffect } from "react";
import Legend from "./Legend";

const legendList = [
    {"color": "green", "activity": "Leisure", "code": "l"},
    {"color": "blue", "activity": "Work", "code": "w"},
    {"color": "red", "activity": "Transportation", "code": "t"},
    {"color": "black", "activity": "Sleep", "code": "s"}
];

const legendColorDict = {
    "l":{"color": "green", "activity": "Leisure", "code": "l"},
    "w":{"color": "blue", "activity": "Work", "code": "w"},
    "t":{"color": "red", "activity": "Transportation", "code": "t"},
    "s":{"color": "black", "activity": "Sleep", "code": "s"}
}

const timeTrackerData = [
    {"date": "01/13/2025", "day":"Monday", "activities":["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "t", "t", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]},
    {"date": "01/14/2025", "day":"Tuesday", "activities":["l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "t", "t", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]}
];



export default function TestComponentsContainer() {
    

    return(
        <div className="testComponentsContainer">
            {/* <DayBlock day="Monday" date="1/13/2025"/> */}

            {timeTrackerData.map((timeTracker)=>{
                return(
                    <DayBlock day={timeTracker.day} date={timeTracker.date} activities={timeTracker.activities}/>
                );
            })}

            <Legend legendList={legendList} legendColorDict={legendColorDict}/>
        </div>
    );
}

const DayBlock = (props) => {
    return(
        <div className="dayBlock">

            <DayHeader day={props.day} date={props.date}/>
            <TimeBar activities={props.activities}/>
        </div>
    )
}

const DayHeader = (props) => {
    return(
        <div className="dayHeader">
            <h3>{props.day}</h3>
            <h5>{props.date}</h5>
        </div>
    );
}

const TimeBar = (props) => {
    console.log(props.activities);
    return(
        <div className="timeBar">
            {props.activities.map((activity)=>{
                return(
                    <TimeBlock activity={activity}/>
                );
            })}
        </div>
    )
}

const TimeBlock = (props) => {

    //legendColorDict

    const color = legendColorDict[props.activity]

    return(
        <div className="timeBlock" style={{backgroundColor:color.color}}> 
        </div>
    )
}


