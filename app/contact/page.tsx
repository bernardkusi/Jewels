import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <div className="page">
        <div className="contact">
          <h4 className="heading">Get In Touch With Us</h4>
          <ul>
            <li><FaFacebook/>Facebook : @Jewels</li>
            <li><FaInstagram/>Instagram : @Jewels</li>
            <li><FaTiktok/>Tiktok  : @Jewels</li>
          </ul>
        </div>


        <div className="contactflex">
          <div className="form">
            <p className="label">Send Us A Message</p>
            <form action="">
              <div className="control">
                <input type="text" name="name" id="name" />
                <label htmlFor="name">Your name</label>
              </div>
              <div className="control">
                <input type="email" name="email" id="email" />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="control">
                <input type="text" name="message" id="message" />
                <label htmlFor="message">Your Message</label>
              </div>

              <button className="click">Send Message</button>
            </form>
          </div>
          <div className="map"></div>
        </div>
      </div>
    </div>
  )
}

export default page
