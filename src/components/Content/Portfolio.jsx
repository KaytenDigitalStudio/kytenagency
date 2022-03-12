import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from '../../styles/Portfolio.module.scss';
import arrow from '../../images/icons/nextprev.svg';
// import arrow from '../../images/icons/workflow-arrow.svg';

function Portfolio() {
  const { t } = useTranslation();
  return (
    <div className={classes.portfolio} id='portfolio'>
      <p className={classes.topic}>{t('ourworks.topic')}</p>
      <div className={classes.arrowPrev}>
        <img src={arrow} alt='' />
      </div>
      <div className={classes.cardsRow}>
        <div className={classes.card}>
          <div className={classes.hoverElements}>
            <div className={classes.titleBackground}>
              <p className={classes.title}>{t('ourworks.first_type')}</p>
            </div>
            <a href='' className={classes.companyLink}>
              <p>envercreation.com</p>
            </a>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.hoverElements}>
            <div className={classes.titleBackground}>
              <p className={classes.title}>{t('ourworks.second_type')}</p>
            </div>
            <a href='' className={classes.companyLink}>
              <p>fastingfooding.cz</p>
            </a>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.hoverElements}>
            <div className={classes.titleBackground}>
              <p className={classes.title}>{t('ourworks.third_type')}</p>
            </div>
            <a href='' className={classes.companyLink}>
              <p>strahovani.cz</p>
            </a>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.hoverElements}>
            <div className={classes.titleBackground}>
              <p className={classes.title}>{t('ourworks.fourth_type')}</p>
            </div>
            <a href='' className={classes.companyLink}>
              <p>travelwithus.org</p>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.arrowNext}>
        <img src={arrow} alt='' />
      </div>
    </div>
  );
}

export default Portfolio;
