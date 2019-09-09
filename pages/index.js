import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { UsersPage } from './users';
import { AlbumsPage } from './albums';
import { getUsers } from '../apis';
import './style.css';
import { addUsersAction } from '../actions';

export class App extends Component {
  constructor(props) {
    super(props);

    if (props.globalState.users.length === 0) {
      document.onkeyup = function (e) {
        if (e.key == "Escape" || e.code == "Escape") {
          props.routeLocation.history.push('/');
        }
      }

      getUsers().then(users => {
        props.addUsersAction(users);
      });
    }
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={ ev => <UsersPage globalState={this.props.globalState} /> } />
        <Route path='/id*' render={ ev => <AlbumsPage routes={ev} /> } />
      </div>
    );
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
  
App = connect(mapStateToProps, mapDispatchToProps)(App);
