import React from 'react'
import { useNavigate } from "react-router-dom"
import "./home.css"
export default function Home() {
    const navigate =useNavigate();
  return (
    <div>
        <ul>
            <li onClick={()=>{navigate('/ReactRoutingTask/home')}}> Home</li>
            <li onClick={()=>{navigate('/ReactRoutingTask/mainpage')}}>Main Page</li>
            <li onClick={()=>{navigate('/ReactRoutingTask/about')}}>About</li>
        </ul>
    </div>
  )
}
