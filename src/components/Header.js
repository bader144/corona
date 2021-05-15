import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 
class Header extends Component {
    render() { 
        return (
            <div style={{marginTop:"60px"}}>
    {/*<!--========== SCROLL TOP ==========-->*/}
    <a href="#home" class="scrolltop" id="scroll-top">
      <i class='bx bx-chevron-up scrolltop__icon'></i>
  </a>

  {/*<!--========== HEADER ==========-->*/}
  <header class="l-header" id="header">
      <nav class="nav bd-container">
          <a href="#home" class="nav__logo">Corona.tn</a>

          <div class="nav__menu" id="nav-menu">
              <ul class="nav__list">
                  <li class="nav__item"><Link to='/Register' class="nav__link">Login</Link></li>
                  <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
                  <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                  <li class="nav__item"><a href="#services" class="nav__link">Services</a></li>
                  <li class="nav__item"><a href="#menu" class="nav__link">Menu</a></li>
                  <li class="nav__item"><a href="#contact" class="nav__link">Contact us</a></li>
                  

                  <li><i class='bx bx-moon change-theme' id="theme-button"></i></li>
              </ul>
          </div>

          <div class="nav__toggle" id="nav-toggle">
              <i class='bx bx-menu'></i>
          </div>
      </nav>
  </header>
            </div>
        );
    }
}
 
export default Header;