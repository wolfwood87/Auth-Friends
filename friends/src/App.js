import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return ( 
    <Router>
      <div>
        <nav>
          <a>
            <Link to="/login">Login</Link>
          </a>
          <a>
            <Link to="/friends">Friends List</Link>
          </a>
        </nav>
        <Switch>
          <PrivateRoute exact path="friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
