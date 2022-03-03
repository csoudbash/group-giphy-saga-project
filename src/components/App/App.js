import React from 'react';
import {HashRouter as Router, Route, Link} from "react-router-dom";


function App(props) {
  return (
    <Router>
      <Route path='/' exact>
        <Header />
        <gifForm />
        <gifList />
      </Route>
      <Route path='/' exact>
        <Header />
        <gifForm />
        <gifList />
      </Route>

    </Router>
 
  );
}

export default App;
