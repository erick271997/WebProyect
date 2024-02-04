import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Imag/logocamara-removebg-preview.png'
import logoA from '../Imag/logoAng.jpg'
import { MdOutlineSmartphone } from "react-icons/md";




function Header() {

  return (
    <div>
      <div className='call-me'>
        <a  className='tel-call' href="tel:+57(316479-8249" target
        ="_blank">
          <MdOutlineSmartphone size={30} /> Llamar ahora!
          🇨🇴 +57  (316)479-8249
        </a>


      </div>
      <br/>
      <br/>
      <br/>
    <header className="navbar">
     
      <Link className='Link-logo' to='/'><img className='logo' src={logoA} alt='logo'/> </Link>
      <nav className="nav-items">
        <Link to="/" className="nav-item">Inicio</Link>
        <Link to="/about" className="nav-item">Acerca de</Link>
        <Link to="/portafolio" className="nav-item">Portafolio</Link>
      </nav>
    </header> 
    </div>
  )
}

export default Header