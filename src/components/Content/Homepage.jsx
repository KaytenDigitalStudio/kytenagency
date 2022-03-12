import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import classes from '../../styles/Homepage.module.scss';
import ilustration from '../../images/ilustrations/first.svg';
import arrow from '../../images/icons/arrow.svg';

function Homepage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <div className={classes.homepage} id='homepage'>
      <div className={classes.body}>
        <div className={classes.ilustration}>
          <img src={ilustration} alt='' draggable='false' />
        </div>
        <div className={classes.textBlock}>
          <p className={classes.topic}>{t('home.topic')}</p>
          <p className={classes.title}>{t('home.title')}</p>
          <p className={classes.description}>{t('home.desc')}</p>
          <Link
            to='footer'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={classes.button}
          >
            <p>{t('home.button')}</p>
          </Link>
        </div>
      </div>
      <div
        className={
          scrollPosition < 25 ? classes.scrollShown : classes.scrollHidden
        }
      >
        <div className={classes.arrow}>
          <img src={arrow} alt='' draggable='false' />
        </div>
        <div className={classes.scrollText}>{t('home.scroll')}</div>
      </div>
    </div>
  );
}

export default Homepage;
