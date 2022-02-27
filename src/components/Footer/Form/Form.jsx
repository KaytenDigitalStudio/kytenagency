import React, { useState } from 'react';
import classes from '../../../styles/Form.module.scss';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

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
      {/* <div className={classes.ilustration}>
          <img src={about} alt='' draggable='false' />
          </div> */}

      <h1>Contact Us</h1>
      <p className={classes.description}>
        We love questions and feedback - and we’re always happy to help!
      </p>
      <div className={classes.inputs}>
        <div className={classes.inpContainer}>
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
          <input
            type='text'
            name='phone'
            value={phone}
            placeholder='+420 123 345 567'
            min='5'
            max='12'
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={classes.inpContainer}>
          <select
            name='services'
            id='select'
            defaultValue={service}
            required
            onChange={(e) => setService(e.target.value)}
          >
            <option value='Def' disabled>
              Select the service
            </option>
            <option value='Webdesign'>Webdesign</option>
            <option value='Website Creation'>Website Creation</option>
            <option value='Promotion'>Promotion</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div className={classes.inpContainer}>
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
        <p>submit</p>
      </button>
    </form>
  );
}

export default Form;
