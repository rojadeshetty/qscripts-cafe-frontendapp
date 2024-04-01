import React from 'react'
import TopNavigation from './TopNavigation'

// Functional component for the About Us page
function AboutUs() {
  return (
    <div>
      {/* Including the TopNavigation component */}
      <TopNavigation/>
      {/* Image container */}
      <div>
      <img src='./images/coffee6.webp'></img>
      </div>
      {/* Text content container */}
      <div>
        <h2 className='aboutus-welcome-heading'>Welcome to QScript Coffee</h2>
        {/* Quotation block with a quote */}
        <blockquote  className='aboutus-quote'>
          <p>"Crafting unforgettable coffee experiences, one cup at a time."</p>
          <footer>- The QScript Coffee Team</footer>
        </blockquote>
        {/* Content about QScript Coffee */}
        <div className='aboutus-content'>
        <p>At QScript Coffee, we believe that great coffee is more than just a beverage – it's a journey of flavors, aromas, and connections. Our mission is to create memorable moments for our customers through exceptional coffee and genuine hospitality.
        From sourcing the finest beans to expertly crafting each cup with care and precision, we are dedicated to delivering an unparalleled coffee experience. Our team of passionate baristas is committed to brewing perfection, ensuring that every sip delights the senses and leaves a lasting impression.
        Join us in our pursuit of coffee excellence, and let us inspire your coffee journey with every cup.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs