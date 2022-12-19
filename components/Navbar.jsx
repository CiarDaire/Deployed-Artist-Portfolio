import React from 'react'
import Link from 'next/link';

const Navbar = () => {

  const openMenu = () => {
    const hamLinks = document.querySelector('.hamburger-links')
    hamLinks.classList.toggle('menuOpen')
  }

  return (
    <div className="menu-cart">
      <nav>
          <ul className="overall-nav">
              <li><Link href={`/gallery`} className="navbar">gallery</Link></li>
              <li><span>|</span></li>
              <li><Link href={`/about`} className="navbar">about</Link></li>
              <li><span>|</span></li>
              <li><Link href={`/shop`} className="navbar">acquire</Link></li>
              <li><span>|</span></li>
              <li><Link href={`/current`} className="navbar">exhibitions</Link></li>
              <li><span>|</span></li>
              <li><Link href={`/contact`} className="navbar">contact</Link></li>
              <li><span>|</span></li>
              <li><Link href={`/help`} className="navbar">help</Link></li>
          </ul>
      </nav>
      <nav className="mobile-hamburger">
          <div className="ham" onClick={openMenu}>
            <img className="iconProducts" src="../images/hamburger-menu.png"/>
          </div>
          <div className="hamburger-links">
            <nav className="menu">
              <Link href={`/gallery`} className="link1">gallery</Link>
              <Link href={`/about`} className="navbar">about</Link>
              <Link href={`/shop`} className="navbar">shop</Link>
              <Link href={`/current`} className="navbar">exhibitions</Link>
              <Link href={`/contact`} className="navbar">contact</Link>
              <Link href={`/help`} className="navbar">help</Link>
            </nav>
          </div>
        </nav>
    </div>
  )
}

export default Navbar

