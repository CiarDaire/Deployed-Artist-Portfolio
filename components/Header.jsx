import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className="header-split">
        <div className="homeButton">
          <Link href={`/`}>Lu Steven</Link>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header