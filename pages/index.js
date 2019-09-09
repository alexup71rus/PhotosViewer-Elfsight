import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { users } from './users';
import { albums } from './albums';
import './style.css';

export class App extends Component {
  constructor(props) {
    super(props);

    document.onkeyup = document.onkeyup ? document.onkeyup : function (e) {
      if (e.key == "Escape" || e.code == "Escape") {
        props.routeLocation.history.push('/');
      }
    }
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={ ev => <Users /> } />
        <Route path="/id*" render={ ev => <Albums /> } />
      </div>
    );
  }
}
