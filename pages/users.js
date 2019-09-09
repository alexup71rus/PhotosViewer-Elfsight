import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Users } from '../components/Users';

export class UsersPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Users users={ this.props.globalState.users } />;
  }
}
