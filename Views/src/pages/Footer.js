import React from 'react'
import NavLogo from "./img/Logo White.svg"
import "./css/footer.css"


function Footer() {
  return (
    <div className='box'>
        <div className='footerCntainer'>
            <div className='row'>
                <a className='footerLink' href="#">About Us</a>
                <a className='footerLink' href="#">Contact Us</a>
                <a className='footerLink' href="#">Terms & Conditions</a>
            </div>
            <hr style={{color:'white', width:'100%'}}/> 
            <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'20px', marginBottom:'20px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img 
                    src={NavLogo} 
                    className='nav-logo' 
                    alt='navLogo'
                    />
                    <span style={{color:'white', fontSize:'13px', marginLeft:'20px'}}>Copyright © 2024 TutorMeister. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer