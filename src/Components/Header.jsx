import React from 'react'
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from '../Banners'
import './header.css'


const images = [Banner1, Banner2, Banner3, Banner4, Banner5]


const Header = ({ title, image }) => {
  return (
    <div className='container'>
      <div className='Banner-img'>
        <img src={image ?? images[Math.floor(Math.random() * images.length)]} alt="Banner Images" />
      </div>

      <div className='text-container'>
        <h1 className='banner-title'>{title} </h1>
        <p className='banner-text'>Welcome to FlavorVerse, your passport to culinary adventures! <br /> Discover a treasure trove of
          delectable recipes from around the globe.</p>
      </div>

    </div>
  )
}

export default Header