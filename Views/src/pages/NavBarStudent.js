import React, {useState} from 'react'
import NavLogo from "./img/Logo White.svg"
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import "./css/navBar.css"


function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return ( 
    <nav className='navBar'>
      <Link className="navLogoLink" id="navLogoLink" to="/student-home">
          <img 
            src={NavLogo} 
            className='nav-logo' 
            alt='navLogo'
          />
      </Link>
      <FaBars className='bars' id='bars' onClick={toggleMenu}/>
      <div className={`navMenue ${showMenu ? 'show' : ''}`}>
          <Link className="navLink" id="navLink" to="/student-home" activeStyle>
              Home
          </Link>
          <Link className="navLink" id="navLink" to="/student-course-home" activeStyle>
              My Courses
          </Link>
          <Link className="navLink" id="navLink" to="/student-account-edit" activeStyle>
              Account
          </Link>
          <Link className="navLink" id="navLink" to="/chat" activeStyle>
              Chat
          </Link>
          {showMenu && (
            <div className={`navBtn ${showMenu ? 'show' : ''}`}>
              <Link className='navBtnLink' id='navBtnLink' to="/student-register">Log Out</Link>
            </div>
          )}
      </div>
      <div className={`navBtn ${showMenu ? 'hide' : ''}`}>
        <Link className='navBtnLink' id='navBtnLink' to="/student-register">Log Out</Link>
      </div>
    </nav>
  )
}

export default NavBar