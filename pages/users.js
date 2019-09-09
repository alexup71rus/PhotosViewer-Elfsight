import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Users } from '../components/Users';
import { getUsers } from '../apis';
import { addUsersAction } from '../actions';

export class UsersPage extends Component {
  constructor(props) {
    super(props);

    if (props.globalState.users.length === 0) {
      getUsers().then(users => {
        props.addUsersAction(users);
      });
    }
  }

  render() {
    return <Users users={ this.props.globalState.users } />;
  }
}

const mapStateToProps = (state) => {
    return {
      globalState: state,
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        addUsersAction: (users) => {
            dispatch(addUsersAction(users));
        }
    }
}
  
UsersPage = connect(mapStateToProps, mapDispatchToProps)(UsersPage);
