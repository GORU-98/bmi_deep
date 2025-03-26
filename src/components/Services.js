import React, { Component } from 'react'

export class Services extends Component {
  render() {
    return (
      <>
      <div className='serv_page'>
            <div className='cards'>
                    <div className='card_txt'>
                    <h1>
                        Our Services
                    </h1>
                    <p>Comprehensive tools for your health journey</p>

                    </div>

                    <div className='card_page'>

                        <div className='card'>
                                <img src='./icons/startup.png' alt='icon'/>
                                <h3>BMI Calculator</h3>
                                <p>Calculate your Body Mass Index and understand your health status</p>
                        </div>
                        <div className='card'>
                        <img src='./icons/startup.png' alt='icon'/>
                                <h3>Diet Plans</h3>
                                <p>Get personalized diet recommendations. based on your goals</p>
                        </div>
                        <div className='card'>
                        <img src='./icons/startup.png' alt='icon'/>
                                <h3>Expert Guidance</h3>
                                <p>Connect with certified nutritionists for personal advice</p>
                        </div>
                    </div>
            </div>
        <div className='start'>
                <h1>Ready to Transform Your Health?</h1>
                <p>Start your journey to better health today with our comprehensive tools and expert guidance.</p>
                <button className="NavLink" to="/contact">Get Started Now</button>
        </div>

      </div>
      </>
    )
  }
}

export default Services
