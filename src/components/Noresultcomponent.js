import React from 'react'
import '../styles/Noresultcomponent.css'
import errorimg from '../img/errorImge.jpeg';
import { useScrollTrigger } from '@mui/material';
import { useStateValue } from './StatePeovider';
function Noresultcomponent() {
  const {SetSdearchValue}=useStateValue();
  
  return (
    <div className='maindivfornoresult'>
      <img src={errorimg} alt='noimge'/>
    </div>
  )
}

export default Noresultcomponent
