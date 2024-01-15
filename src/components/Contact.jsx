import React from 'react'
import '../styles/Contact.css'
import contactbg from '../assets/contactbg.jpg'
import motopic from '../assets/motopic.png'
import { Link } from 'react-router-dom'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Contact() {
  return (
    <div className='contact' style={{ backgroundImage: `url(${contactbg})` }}>
      <div className='contenier'>
        <div className='motopic animate__animated animate__fadeInLeft' style={{ backgroundImage: `url(${motopic})` }}></div>
        <div className='contact-info animate__animated animate__fadeInRight'>
          <h3 className='free'>Free Delivery</h3>
          <h1>Delivered On Right <br /> Time & Place</h1>
          <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe aut minus nostrum odit? Voluptatem officiis consectetur eos odio tempora sint.</p>
          <div className='phone'>
            <PhoneAndroidIcon/>
            <div>
              <p className='delivery'>Delivery Order Num.</p>
              <h3 className='number'>0123456789</h3>
            </div>
          </div>
          <div className='btn'>
            <Link to="/menu">
          <button className='orderbtn'>Order Now</button>
        </Link>
          </div>
        </div>


    </div>
    
    </div>
  )
}
