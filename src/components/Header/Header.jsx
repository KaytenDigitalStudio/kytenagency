import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logo/logo.svg';
import classes from '../../styles/Header.module.scss';
import Menu from '../Header/Menu/Menu';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const OpenMenu = () => {
    setMenuActive(!menuActive);
    menuActive ? setMenuActive(false) : setMenuActive(true);
  };

  const ClickAndClose = (e) => {
    e.preventDefault();
    setMenuActive(false);
  };

  const items = [
    { value: 'Home', href: 'homepage' },
    { value: 'About', href: 'about' },
    { value: 'Services', href: 'services' },
    { value: 'Work Flow', href: 'workFlow' },
    { value: 'Portfolio', href: 'portfolio' },
    { value: 'Contacts', href: 'footer' },
  ];

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link
          to='homepage'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={classes.logoGroup}
          onClick={ClickAndClose}
        >
          <img
            className={classes.logo}
            src={logo}
            alt='Kayten Digital Logo'
            draggable='false'
          />
          <div className={classes.logoText}>Kyten Digital</div>
        </Link>
        <nav className={classes.desktopMenu}>
          <ul className={classes.navMenu}>
            {items.map((items) => (
              <li key={items.value}>
                <Link
                  to={items.href}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={classes.navText}
                >
                  {items.value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={menuActive ? classes.burgerMenuActive : classes.burgerMenu}
          onClick={OpenMenu}
        >
          <span className={classes.burgerLine}></span>
          <span className={classes.burgerLine}></span>
          <span className={classes.burgerLine}></span>
        </div>
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} />
    </header>
  );
}

export default Header;
