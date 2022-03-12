import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from '../../styles/About.module.scss';
import about from '../../images/ilustrations/about.png';

function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className={classes.about} id='about'>
      <div className={classes.body}>
        <div className={classes.ilustration}>
          <img src={about} alt='' draggable='false' />
        </div>
        <div className={classes.textBlock}>
          <p className={classes.topic}>{t('about.topic')}</p>
          <p className={classes.title}>{t('about.title')}</p>
          <p className={classes.description}>{t('about.desc')}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
