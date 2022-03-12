import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from '../../styles/Services.module.scss';
import design from '../../images/icons/design.svg';
import code from '../../images/icons/code.svg';
import marketing from '../../images/icons/marketing.svg';
import third from '../../images/ilustrations/third.svg';
import fourth from '../../images/ilustrations/fourth.svg';

function Services() {
  const { t } = useTranslation();
  return (
    <div className={classes.services} id='services'>
      <p className={classes.topic}>{t('services.topic')}</p>
      <div className={classes.row}>
        <div className={classes.design}>
          <p className={classes.title}>{t('services.design_title')}</p>
          <div className={classes.icon}>
            <img src={design} alt='' draggable='false' />
          </div>
          <p className={classes.description}>{t('services.design_desc')}</p>
        </div>
        <div className={classes.code}>
          <p className={classes.title}>{t('services.creation_title')}</p>
          <div className={classes.icon}>
            <img src={code} alt='' draggable='false' />
          </div>
          <p className={classes.description}>{t('services.creation_desc')}</p>
        </div>
        <div className={classes.marketing}>
          <p className={classes.title}>{t('services.promotion_title')}</p>
          <div className={classes.icon}>
            <img src={marketing} alt='' draggable='false' />
          </div>
          <p className={classes.description}>{t('services.promotion_desc')}</p>
        </div>
      </div>
      <img className={classes.elemOne} src={third} alt='' draggable='false' />
      <img className={classes.elemTwo} src={fourth} alt='' draggable='false' />
    </div>
  );
}

export default Services;
