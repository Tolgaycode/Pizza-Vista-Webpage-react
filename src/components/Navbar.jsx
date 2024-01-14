import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import PizzaLogo from '../assets/PizzaLogo.png'


export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={PizzaLogo} alt=""/>
        </div>

        <div className='nav'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        
    </div>
  )
}
