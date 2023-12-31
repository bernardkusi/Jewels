import Link from 'next/link'
import React from 'react'
import { FaUser,FaShoppingCart,FaSearch, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <div>
            <span></span>

            <ul>
                <a href="tel:">0592724408</a>
                <a href="tel:">0592724408</a>
            </ul>

            <ul>
                <a href="tel:"><FaFacebook/></a>
                <a href="tel:"><FaInstagram/></a>
                <a href="tel:"><FaTiktok/></a>
                <span>@Jewels</span>
            </ul>
        </div>
      <nav>
        <Link href="/" className="logo">Jewels</Link>

        <div className="search">
          <span><FaSearch /></span>
          <input type="text" placeholder="search" />
        </div>

        <ul>
            <a href="#"><FaUser/></a>
            <Link href="/cart"><FaShoppingCart/></Link>
        </ul>

        <ul>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
