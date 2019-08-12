import React, {useState} from "react";
//import React from "react";
import "./App.css";

const Quarters = () => {
    const [quarter, setQuarter] = useState(1);


    return (
        <div className="gameControl">
            <button onClick={() => {
                setQuarter(quarter + 1);
                console.log(quarter);
                }}>Change quarters</button>
        </div>
    );
}

export default Quarters;