import React from 'react';
import classes from '../styles/App.module.scss';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.wrapper}>
        <Header />
        <div className={classes.container}>
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
