import React from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='quicklinks'>
          <p style={{ fontSize: 20, letterSpacing: 1, fontWeight: 'bold' }}>Flavor
            <span style={{ color: 'green' }}>Verse</span>
          </p>
        </div>

        <div className='quicklinks'>
          <p style={{ fontSize: 20, marginBottom: 4 }}>Quick Links</p>
          <div className='side'>
            <a href="#" className='links'>Home</a>
            <a href="#" className='links'>About</a>
            <a href="#" className='links'>Services</a>
            <a href="#" className='links'>Contact</a>
            <a href="#" className='links'>Chiefs</a>
          </div>
        </div>

        <div className='quicklinks'>
          <p style={{ fontSize: 20, marginBottom: 4 }}>LEGAL</p>
          <div className='side'>
            <a href="#" className='links'>Terms and Conditions</a>
            <a href="#" className='links'>License Agreement</a>
            <a href="#" className='links'>Privacy Policy</a>
            <a href="#" className='links'>Copyright Information</a>
            <a href="#" className='links'>Cookie Policy</a>
          </div>
        </div>

        <div className='quicklinks'>
          <p style={{ fontSize: 20, marginBottom: 4 }}>SOCIAL MEDIA</p>
          <div className='side'>
            <a href="" className='media-links'><FaFacebook size={18} /></a>
            <a href="" className='media-links'><FaInstagram size={18} /></a>
            <a href="" className='media-links'><FaTwitter size={18} /></a>
            <a href="" className='media-links'><FaYoutube size={18} /></a>
          </div>
          <div>
            <button title='Sign-in'
              className='sign-in'>Sign in</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer