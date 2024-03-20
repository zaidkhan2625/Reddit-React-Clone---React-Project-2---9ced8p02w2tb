import React from 'react'
import '../styles/Dead.css';
import { useNavigate } from 'react-router-dom';
import Hoc from '../Hoc/Hoc';
import { useStateValue } from './StatePeovider';
function Dead() {
  const navigate = useNavigate();
  const {SetSdearchValue}=useStateValue();

  const handeGoBack =()=>{
    navigate("/");
  }
  SetSdearchValue("");
  return (
    <div className='maindiv'>
      Hey,this page is still in progress
      <img className='imgg' src='https://cdn.pixabay.com/photo/2017/06/20/08/12/maintenance-2422172_1280.jpg'/>
      <button onClick={handeGoBack}>Go Back</button>
    </div>
  )
}

export default Hoc(Dead);
