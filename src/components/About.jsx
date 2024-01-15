import React from 'react'
import aboutimg from '../assets/aboutimg.png'
import { Link } from 'react-router-dom'
import '../styles/About.css'

export default function About() {
  return (
  <div className='container'>
    <div className='aboutPage' style={{ backgroundImage: `url(${aboutimg})` }}>
    <div className='about'>
      <h1 className='animate__animated animate__fadeInLeft'>Discover the Art of Perfect Pizza at <br /> Pizza Vista</h1>
      <p className='animate__animated animate__fadeInRight'>Welcome to Pizza Vista, where passion for pizza meets culinary craftsmanship. Established with a commitment to deliver the finest pizza experience, we take pride in every slice that comes out of our ovens.

      At Pizza Vista, we believe that pizza is not just a dish; it's a form of art. From the selection of the freshest ingredients to the meticulous preparation by our skilled chefs, each pizza is a masterpiece crafted with love and dedication. Our goal is simple - to bring joy to your taste buds with every bite.</p>
      <Link to="/">
        <button className='button-53 animate__animated animate__fadeInBottomRight'>Home</button>
      </Link>
    </div>
  </div>
</div>
  )
}
