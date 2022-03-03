// import React from 'react';
import Header from '../Header/Header.js';
import GifForm from '../GifForm/GifForm'
import GifList from '../GifList/GifList';
import {HashRouter as Router, Route, Link} from "react-router-dom";


function App(props) {
  return (
    <Router>
      <Route path='/' exact>
        <Header />
        <GifForm />
        <GifList />
      </Route>
      <Route path='/favorites'>
        <Header />
        <GifForm />
        <GifList />
      </Route>

    </Router>

  );
}

export default App;
