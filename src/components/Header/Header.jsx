import React, { useState } from 'react';
import logo from '../../images/logo/logo.svg';
import classes from '../../styles/Header.module.scss';
import Menu from '../Header/Menu/Menu';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const OpenMenu = () => {
    setMenuActive(!menuActive);
    menuActive ? setMenuActive(false) : setMenuActive(true);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <a href='/main' className={classes.logoGroup}>
          <img
            className={classes.logo}
            src={logo}
            alt='Kayten Digital Logo'
            draggable='false'
          />
          <div className={classes.logoText}>Kyten Digital</div>
        </a>
        <div
          className={menuActive ? classes.burgerMenuActive : classes.burgerMenu}
          onClick={OpenMenu}
        >
          <span className={classes.burgerLine}></span>
          <span className={classes.burgerLine}></span>
          <span className={classes.burgerLine}></span>
        </div>
        {/* <ul className={classes.navMenu}>
          <li>
            <a href='#homepage' className={classes.navText}>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className={classes.navText}>
              About
            </a>
          </li>
          <li>
            <a href='#services' className={classes.navText}>
              Services
            </a>
          </li>
          <li>
            <a href='' className={classes.navText}>
              Portfolio
            </a>
          </li>
          <li>
            <a href='' className={classes.navText}>
              Contacts
            </a>
          </li>
        </ul> */}
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} />
    </header>
  );
}

export default Header;
