import React from 'react'
import BannerImage from '../assets/Mainimg.jpg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='mainPage' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='order'>
        <h1>Pizza Vista</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quae tempore veniam modi maiores quo aliquid corrupti eligendi aliquam quibusdam ex ut adipisci porro laudantium sed dolorem minima, repellendus at inventore aut veritatis error, iusto esse maxime? In eos quis et, molestias est ullam ipsum corporis suscipit praesentium, perferendis sed!</p>
        <Link to="/menu">
          <button className='button-53'>Order Now</button>
        </Link>


      </div>
    </div>
  )
}
