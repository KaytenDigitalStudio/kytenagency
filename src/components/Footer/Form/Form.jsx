import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from '../../../styles/Form.module.scss';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import Dropdown from './Dropdown/Dropdown';

const firebaseConfig = {
  apiKey: 'AIzaSyAVhDtOqLGAdCA1vcjHXPOnfkEzjpleY3c',

  authDomain: 'kyten-digital.firebaseapp.com',

  databaseURL:
    'https://kyten-digital-default-rtdb.europe-west1.firebasedatabase.app/',

  projectId: 'kyten-digital',

  storageBucket: 'kyten-digital.appspot.com',

  messagingSenderId: '618083151784',

  appId: '1:618083151784:web:03db87ba82dcadd145b79d',

  measurementId: 'G-QT5HDQ9L5V',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Form() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [selected, setSelected] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const postListRef = ref(db, 'datas');
    const newPostRef = push(postListRef);
    set(newPostRef, {
      name: name,
      email: email,
      phone: phone,
      service: service,
      message: message,
      inWhatTime: Date().toLocaleString(),
    }).catch(alert);
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setMessage('');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit} id='contacts'>
      <div className={classes.body}>
        <h1>{t('form.title')}</h1>
        <p className={classes.description}>{t('form.subtitle')}</p>
        <div className={classes.inputs}>
          <div className={classes.inpContainer}>
            <label htmlFor='name'>{t('form.name')}*:</label>
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Pavel'
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.inpContainer}>
            <label htmlFor='email'>{t('form.email')}*:</label>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='example@email.com'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.inpContainer}>
            <label htmlFor='phone'>{t('form.phone')}:</label>
            <input
              type='tel'
              name='phone'
              value={phone}
              placeholder='+420 123 345 567'
              minLength='5'
              maxLength='15'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <Dropdown selected={selected} setSelected={setSelected} />
          <div className={classes.inpContainer}>
            <label htmlFor='message'>{t('form.message')}:</label>
            <textarea
              type='text'
              name='message'
              value={message}
              placeholder='Type, here your text...'
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <button className={classes.button}>
          <p>{t('form.button')}</p>
        </button>
      </div>
    </form>
  );
}

export default Form;
