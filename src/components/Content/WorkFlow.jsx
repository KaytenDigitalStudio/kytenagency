import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from '../../styles/Workflow.module.scss';
import arrow from '../../images/icons/workflow-arrow.svg';
import firstStep from '../../images/icons/firstImage.svg';
import secondStep from '../../images/icons/secondImage.svg';
import thirdStep from '../../images/icons/thirdImage.svg';

function Workflow() {
  const { t } = useTranslation();
  return (
    <div className={classes.workflow} id='workflow'>
      <p className={classes.topic}>{t('workflow.topic')}</p>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <p className={classes.number}>1</p>
          <img src={firstStep} alt='' className={classes.spots} />
          <h2>{t('workflow.one_title')}</h2>
          <p className={classes.description}>{t('workflow.one_desc')}</p>
        </div>
        <img src={arrow} alt='' className={classes.firstArrow} />
        <div className={classes.card}>
          <p className={classes.number}>2</p>
          <img src={secondStep} alt='' className={classes.spots} />
          <h2>{t('workflow.two_title')}</h2>
          <p className={classes.description}>{t('workflow.two_desc')}</p>
        </div>
        <img src={arrow} alt='' className={classes.secondArrow} />
        <div className={classes.card}>
          <p className={classes.number}>3</p>
          <img src={thirdStep} alt='' className={classes.spots} />
          <h2>{t('workflow.three_title')}</h2>
          <p className={classes.description}>{t('workflow.three_desc')}</p>
        </div>
      </div>
    </div>
  );
}

export default Workflow;
