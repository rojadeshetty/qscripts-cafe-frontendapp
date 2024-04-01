import React from 'react'
import { Link } from 'react-router-dom'
import TopNavigation from './TopNavigation'

function Home() {
  return (
    <div>
       {/* Including the TopNavigation component  */}
      <TopNavigation/>
       {/* Main content container */}
      <div className="home-container">
      <div className="home-image-container">
        {/* Displaying the coffee image */}
        <img src="./images/coffee2.jpeg" className='home-coffee-img'></img>
        </div>
        {/* Container for textual content */}
        <div className="home-content-container">
        <h2 className='home-Heading'>"Start your day the QScripts way – with love and lattes."</h2>
        <p>QScript Coffee offers a delightful array of specialty coffee beverages and delectable pastries to satisfy the cravings of every coffee lover. Our menu features a carefully curated selection of handcrafted drinks, including classic favorites like espresso and cappuccino, as well as unique creations crafted by our skilled baristas. From rich and robust brews to creamy and indulgent concoctions, we have something to tantalize every palate.
        <br></br>
        In addition to our exceptional coffee offerings, QScript Coffee takes pride in our selection of freshly baked pastries. Indulge in a variety of mouthwatering treats, from flaky croissants to decadent muffins, perfectly paired with your favorite coffee beverage. Whether you're stopping by for a quick pick-me-up or settling in for a leisurely coffee break, QScript Coffee promises a memorable experience with every sip and bite.</p>
        <div>
          {/* Description about QScript Coffee */}
          <p className='home-contact-content'>
          "Ready to experience the QScript Coffee difference? Connect with us today and let's make your coffee dreams a reality!"
          </p>
          <Link to='/ContactUs'>
          <button type='button' className='contact-Button'>ContactUs</button>
          </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home