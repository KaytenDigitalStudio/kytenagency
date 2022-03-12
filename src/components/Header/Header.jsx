import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import logo from '../../images/logo/logo.svg';
import languageImage from '../../images/icons/language.svg';
import english from '../../images/icons/english.svg';
import czech from '../../images/icons/czech.svg';
import classes from '../../styles/Header.module.scss';
import Menu from '../Header/Menu/Menu';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const [langActive, setLangActive] = useState(false);

  const OpenMenu = () => {
    setMenuActive(!menuActive);
    menuActive ? setMenuActive(false) : setMenuActive(true);
  };

  const ClickAndClose = (e) => {
    e.preventDefault();
    setMenuActive(false);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLangActive(false);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logoGroup}>
          <Link
            to='homepage'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={ClickAndClose}
          >
            <img
              className={classes.logo}
              src={logo}
              alt='Kayten Digital Logo'
              draggable='false'
            />
          </Link>
          <div className={classes.logoText}>
            <Link
              to='homepage'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={ClickAndClose}
            >
              <p>Kyten Digital</p>
            </Link>
          </div>
        </div>
        <nav className={classes.desktopMenu}>
          <ul className={classes.navMenu}>
            <li>
              <Link
                to='homepage'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={classes.navText}
              >
                {t('navigation.home')}
              </Link>
            </li>
            <li>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={classes.navText}
              >
                {t('navigation.about')}
              </Link>
            </li>
            <li>
              <Link
                to='services'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={classes.navText}
              >
                {t('navigation.services')}
              </Link>
            </li>
            <li>
              <Link
                to='workflow'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={classes.navText}
              >
                {t('navigation.workflow')}
              </Link>
            </li>
            <li>
              <Link
                to='portfolio'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={classes.navText}
              >
                {t('navigation.portfolio')}
              </Link>
            </li>
            <li>
              <Link
                to='contacts'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={classes.navText}
              >
                {t('navigation.contacts')}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.language}>
          <div
            className={classes.langButton}
            onClick={() => setLangActive(!langActive)}
          >
            <img src={languageImage} alt='language icon' />
          </div>
          <div
            className={langActive ? classes.langActive : classes.langNotActive}
          >
            <div
              onClick={() => changeLanguage('en')}
              className={classes.langItem}
            >
              <img src={english} alt='' />
            </div>
            <div
              onClick={() => changeLanguage('cz')}
              className={classes.langItem}
            >
              <img src={czech} alt='' />
            </div>
          </div>
        </div>
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
