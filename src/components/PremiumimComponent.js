import React from 'react'
import '../styles/premiumi.css';
import Hoc from '../Hoc/Hoc';
function PremiumimComponent() {
  return (
    <div className='divforpremium'>
      <img src='https://d3dyfaf3iutrxo.cloudfront.net/file/editor/image/6626869e02a8486d89a85ece6fbaf054.png'/>
    </div>
  )
}

export default Hoc(PremiumimComponent);
