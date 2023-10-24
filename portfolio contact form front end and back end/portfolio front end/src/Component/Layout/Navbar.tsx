import React from 'react'
import { useState , useEffect } from 'react';
import Styles from '../Porto.module.css'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import 'aos/dist/aos.js'
import { Outlet, Link } from "react-router-dom";

export const NavbarContent = () => {

  const navigate = useNavigate();
  const handlecontactClick = () => {
    navigate('/contactform')
  }
  const handleformClick = () => {
    navigate('/detaildata')
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>

      <nav id="desktop-nav" data-aos="fade-right">
        <div className={Styles.logo}>Elaiya Barathi</div>
        <div>
          <ul className={Styles.navLinks}>
            <li data-aos="fade-down"><a href="#about">About</a></li>
            <li data-aos="fade-down"><a href="#experience">Experience</a></li>
            <li data-aos="fade-down"><a href="#projects">Projects</a></li>
            <li data-aos="fade-down"><a onClick={handlecontactClick}>Contact</a></li>
            <li data-aos="fade-down"><a onClick={handleformClick} >Detail Data</a></li>
          </ul>
        </div>
      </nav>
      <Outlet />

    </>
  )
}
