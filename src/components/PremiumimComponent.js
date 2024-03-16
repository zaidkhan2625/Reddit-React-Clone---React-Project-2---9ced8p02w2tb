import React from 'react'
import '../styles/premiumi.css';
import Hoc from '../Hoc/Hoc';
import { useStateValue } from './StatePeovider';
function PremiumimComponent() {
  const {SetSdearchValue}=useStateValue();
  SetSdearchValue("");
  return (
    <div className='divforpremium'>
      <img src='https://d3dyfaf3iutrxo.cloudfront.net/file/editor/image/6626869e02a8486d89a85ece6fbaf054.png'/>
    </div>
  )
}

export default Hoc(PremiumimComponent);
