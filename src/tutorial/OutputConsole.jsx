import { useState } from "react";

const OutputConsole = ({text, setText}) => {
    return(
        <div className="outputconsole">
            {text}
        </div>
    );
}