import React, { useState } from 'react';
import logo from '../../images/logo/logo.svg';
import classes from '../../styles/Header.module.scss';
import Menu from '../Header/Menu/Menu';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const OpenMenu = (e) => {
    setMenuActive(!menuActive);
    menuActive ? setMenuActive(false) : setMenuActive(true);
  };

  return (
    <div className={classes.head}>
      <nav className={classes.nav}>
        <a href='/main' className={classes.logoGroup}>
          <img className={classes.logo} src={logo} alt='Kayten Digital Logo' />
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
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} />
    </div>
  );
}

export default Header;
