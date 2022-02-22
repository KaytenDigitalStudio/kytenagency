import React, { useState } from 'react';
import logo from '../../images/logo/logo.svg';
import burger from '../../images/icons/hamb-menu.svg';
import classes from '../../styles/Header.module.scss';
import Menu from '../Menu/Menu';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: 'Main', hred: '/main' },
    { value: 'About', hred: '/about' },
    { value: 'Services', hred: '/services' },
    { value: 'Portfolio', hred: '/portfolio' },
    { value: 'Contacts', hred: '/contacts' },
  ];
  return (
    <div className={classes.head}>
      <nav className={classes.nav}>
        <a href='#' className={classes.logoGroup}>
          <img className={classes.logo} src={logo} alt='Kayten Digital Logo' />
          <div className={classes.logoText}>Kayten Digital</div>
        </a>
        <div
          className={classes.burgerMenu}
          onClick={() => setMenuActive(!menuActive)}
        >
          <img src={burger} alt='' />
        </div>
      </nav>
      <Menu items={items} active={menuActive} setActive={setMenuActive} />
    </div>
  );
}

export default Header;
