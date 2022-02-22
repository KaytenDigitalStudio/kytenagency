import React, { useState } from 'react';
import classes from './styles/App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.wrapper}>
        <Main />
      </div>
    </div>
  );
}

export default App;
