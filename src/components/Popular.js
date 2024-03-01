import React from 'react'
import "../styles/Result.css";

function Popular({ name, image }) {
    const  HandelDead=()=>{
       alert("there is no more details");
     }
     return (
       <>
         <div className="resultPopular" onClick={HandelDead}>
           <div className="popularLogo">
             <img className="img" src={image} />
           </div>
           <div className="memberinPopulr">
             <p className="popularname">{name}</p>
             <span className="numbberofmembers">25211 members</span>
           </div>
         </div>
       </>
     );
   }
   

export default Popular
