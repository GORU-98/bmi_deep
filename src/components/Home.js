import React, { Component } from 'react'
// import {  NavLink} from 'react-router-dom';
export class Home extends Component {
  render() {
    return (
        <>
        <div className='homepage'   >

        <div className="homepic" >
  <div className="pic">
    <img src="./pics/overhead-view-colorful-fruits-isolated-white-background.jpg" alt="" />
  </div>
</div>

<div className="hometext">
<h1  >Your Journey to a Healthier Life Starts Here</h1>
<h4  >Get personalized nutrition advice and diet plans tailored to your unique needs.</h4>

<button className="NavLink" to="/contact"  >Contact me</button>
<button className="NavLink" to="/serv"  >Services</button>
  
</div>

</div>
        </>
     
    )
  }
}

export default Home
