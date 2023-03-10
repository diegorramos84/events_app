import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div>
        <div className='topNav'>
          <Image src={ "/images/logo.png" } width={50} height={50} alt='logo'/>
          <nav>
            <ul>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/events'>Events</Link></li>
              <li><Link href='/about'>About us</Link></li>
            </ul>
          </nav>
        </div>
        <h1>Lorem Ipsum available</h1>
      </div>
    </header>
  )
}

export default Header
