import React from 'react';
import classes from './styles/App.module.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.main}>
        <Header />
        <div className={classes.wrapper}>
          <Content />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
