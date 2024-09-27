import React from 'react'
import './Footer.css'
import instagram_icon from'../Assets/instagram_icon.png'
import whatsapp_icon from'../Assets/whatsapp_icon.png'
import pinterest_icon from'../Assets/pintester_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="footer-logo">
        {/* <img src="" alt="big-logo" /> */}
        <p>FLORA</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Plants</li>
        <li>Database</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
          <div className="footer-icons-container">
             { <img src={instagram_icon} alt="insta-icon" /> }
            { <img src={pinterest_icon} alt="Pinterest-icon" /> }
            {<img src={whatsapp_icon} alt="whatsapp-icon" /> }
          
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
