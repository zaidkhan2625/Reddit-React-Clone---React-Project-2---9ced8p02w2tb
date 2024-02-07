import React from 'react'
import Hader from '../components/Hader'


function Hoc(Wrappercomponent) {
    return function inner(){
        return (
            <div>
              <Hader/>
              <Wrappercomponent/>
            </div>
          )
    }
}

export default Hoc
