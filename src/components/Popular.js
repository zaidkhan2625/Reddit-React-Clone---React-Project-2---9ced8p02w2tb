import React from 'react'
import "../styles/Result.css";
import { useNavigate } from 'react-router-dom';

function Popular({ name, image }) {
    const navigate = useNavigate();
    const  HandelDead=()=>{
      navigate("/Dead");
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
