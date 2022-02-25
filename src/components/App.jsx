import React from 'react';
import classes from '../styles/App.module.scss';
import Header from './Header/Header';
import Content from './Content/Content';

function App() {
  return (
    <main className={classes.main}>
      <Header />
      <div className={classes.wrapper}>
        <Content />
      </div>
    </main>
  );
}

export default App;
