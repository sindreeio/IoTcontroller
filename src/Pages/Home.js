import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../index.css';
import password from '../password';


function Password(userinput){
    if(userinput=== password){
        console.log("dadsssf")
        return true;
    }
}

function Home(props){

   const [userpassword, setUserpassword] = useState(password);
   const [correct, setCorrect] = useState(false);

    return(
        
        <div className="container">
            {correct ? <Redirect to="/stuff"/> : null}
            <div className="flex-container">
                <div className="row">
                    <div className="">
                        <input className="inputclass" onChange={(e) => setUserpassword(e.target.value)}></input>
                    </div>
                    <div className="flex-row-item">
                        <button onClick={() => setCorrect(Password(userpassword))} className="submitButton">Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Home;