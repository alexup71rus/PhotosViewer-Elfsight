import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { UserList } from '../components/UserList';
import { getUsers } from '../apis';
import './style.css';
import { addUsersAction } from '../actions';

export class App extends Component {
  constructor(props) {
    super(props);
    
    if (props.globalState.users.length === 0) {
      getUsers(5).then(users => {
        props.addUsersAction(users);
      });
    }

    document.onkeyup = document.onkeyup ? document.onkeyup : function (e) {
      if (e.key == "Escape" || e.code == "Escape") {
        props.routeLocation.history.push('/');
      }
    }
  }

  render() {
    console.log(this.props.globalState.users);
    return (
      <div>
        <UserList users={ this.props.globalState.users } />
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
