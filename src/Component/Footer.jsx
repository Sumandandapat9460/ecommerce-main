import React from 'react'
import "../Style/AdminFooter.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
  return (
    <div className='Footer'>
        <div className="contact">
            <span>Contact Us</span>
            <p>Phone: 12345678900<br /> Email:ekart@gmail.com</p>
        </div>

        <div className="connect">
          <FacebookIcon/> <InstagramIcon/> <XIcon/> <YouTubeIcon/>
        </div>
      
    </div>
  )
}
