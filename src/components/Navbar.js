import React, { Component } from 'react'
import {   Outlet } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
        <>
        <div className="nav_pc">
       <nav>
     <div className="nav_logo">
         <h1>DeepNutriGuide👽</h1>
     </div>
     <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/bmi">BMI Calculator</a></li>
         <li><a href="/diet">Diet Plans</a></li>
         <li><a href="/about">About</a></li>
         <li><a href="/serv">Services</a></li>
        
     </ul>
    </nav>
 
</div>
<Outlet/>
     </>
    )
  }
}

export default Navbar
