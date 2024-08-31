import React from "react";
import { Link } from "react-router-dom"; 


function Landingscreen(){
return (
<div className ="row landing justify-content-center">
        <div className="col-md-9 my-auto text-center" style={{borderRight:'5px solid white'}}>
            <h2 style={{color : 'white',fontSize:'130px'}}>Malika</h2>
            <h1 style={{color:'white'}}>"Feel at home, wherever you roam."</h1>
            
            <Link to='/home'>
            <button className="btn" style={{color: 'black', backgroundColor: 'white'}}>Get Started</button>
            </Link>
        </div>
    </div>
    )
}

export default Landingscreen;