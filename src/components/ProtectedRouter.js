import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StatePeovider';

function ProtectedRouter(props) {
    const {Component} = props
    const Navigate = useNavigate();
    const login  = localStorage.getItem("login");
        useEffect(()=>{
        if(!login)
        {
          Navigate('/')
        }
    })
  return (
    <div>
      <Component/>
    </div>
  )
}

export default ProtectedRouter
