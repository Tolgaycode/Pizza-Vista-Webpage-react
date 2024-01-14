import React from 'react'
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='socialMedia'>
          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
        </div>
        <div className='text'>© 2024 - Pizza Vista</div>
      </div>
    </div>
  )
}
