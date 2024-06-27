import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../Banners/logo.png'
import './navbar.css'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='nav-header'>
      <nav className='navbar'>
        <Link to='/' className='logo-link'>
          <img src={Logo} alt='logo' width={80} height={80} />Flavour<span>Verse</span>
        </Link>

        <ul className='nav-list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipe/:id">Explore</Link></li>
          <li><Link to="/favourites">Favourites</Link></li>
        </ul>

        <button title='Sign in'
          className='signin-btn'>Sign in</button>


        <button className='menu-btn' onClick={() => handleMenuClick()}>
          {isOpen ? <AiOutlineClose style={{ fontSize: '25px' }} /> : <HiMenuAlt3 style={{ fontSize: '35px' }} />}
        </button>

      </nav>
      {isOpen ? (<div className={'menulist'}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/recipe/:id">Explore</Link></li>
          <li><Link to="/favourites">Favourites</Link></li>
        </ul>
      </div>) : ''}
    </header>
  )
}

export default Navbar