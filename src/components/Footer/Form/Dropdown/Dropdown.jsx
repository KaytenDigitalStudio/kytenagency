import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from '../../../../styles/Dropdown.module.scss';
import arrow from '../../../../images/icons/arrownew.svg';
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();
  return (
    <div className={classes.dropdown}>
      <label htmlFor='button'>{t('form.service.text')}*:</label>
      <div
        className={classes.button}
        name='button'
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected ? selected : t('form.service.select')}
        <img
          src={arrow}
          alt='arrow'
          className={isActive ? classes.iconActive : classes.iconNotActive}
        />
      </div>
      <div
        className={isActive ? classes.contentActive : classes.contentNotActive}
      >
        <div
          onClick={(e) => {
            setSelected(t('form.service.option_two'));
            setIsActive(false);
          }}
          className={classes.item}
        >
          {t('form.service.option_two')}
        </div>
        <div
          onClick={(e) => {
            setSelected(t('form.service.option_three'));
            setIsActive(false);
          }}
          className={classes.item}
        >
          {t('form.service.option_three')}
        </div>
        <div
          onClick={(e) => {
            setSelected(t('form.service.option_four'));
            setIsActive(false);
          }}
          className={classes.item}
        >
          {t('form.service.option_four')}
        </div>
        <div
          onClick={(e) => {
            setSelected(t('form.service.option_five'));
            setIsActive(false);
          }}
          className={classes.item}
        >
          {t('form.service.option_five')}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
