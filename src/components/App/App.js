import React from 'react';

import Header from '../Header/Header.js';
import gifForm from '../gifForm/gifForm.js'

import {HashRouter as Router, Route, Link} from "react-router-dom";


function App(props) {
  return (
    <Router>
      <Route path='/' exact>
        <Header />
        <gifForm />
        <gifList />
      </Route>
      <Route path='/favorites'>
        <Header />
        <gifForm />
        <gifList />
      </Route>

    </Router>
 

  );
}

export default App;
