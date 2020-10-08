import React, { useEffect, useState } from 'react';
import '../index.css';
import databaseRef from '../Database/Firebase';
import { useParams } from "react-router-dom";


function sendTime(hours, minutte, id){
    if(hours<24 && minutte < 59){
        const now = new Date()  
        const secondsSinceEpoch = Math.round(now.getTime() / 1000);
        const hou = hours - now.getHours();
        if (hou < 0){
            hou += 24;
        };
        const mi = minutte - now.getMinutes();
        if (mi < 0){
            mi += 24;
        };
        const plusstime = (mi * 60) + (hou*3600);
        const totaltime = secondsSinceEpoch + plusstime;
        console.log(hours);
        databaseRef.child("Products").child("wakeup").update({number: totaltime});  
    }

}

function Product(props){
    const { name } = useParams();
    const [hour, setHour] = useState();
    const [min, setMin] = useState();


    return(
        <div className="container">
            <div className="flex-container">
                <input onChange={(e) => setHour(e.target.value)} className="small-input inputclass" type="number" min="0" max="23"></input> <div> : </div>
                <input onChange={(e) => setMin(e.target.value)} className="small-input inputclass" type="number" min="0" max="59"></input>
                <div className="flex-row-item">
                        <button onClick={() => sendTime(hour, min, name)} className="submitButton">Submit</button>
                </div>
               
            </div> 
            <div className="slidecontainer">hei<input type="range" min="1" max="100" value="50" step="1" ></input></div>
            
        </div>
    )
}

export default Product;