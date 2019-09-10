import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { UsersPage } from './users';
import { AlbumsPage } from './albums';
import { AlbumPage } from './album';
import { getUsers } from '../apis';
import './style.css';
import { addUsersAction } from '../actions';

export class App extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    if (props.globalState.users.length === 0) {
      getUsers().then(users => {
        props.addUsersAction(users);
      });
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={ ev => <UsersPage globalState={this.props.globalState} /> } />
        <Route path='/id*' render={ ev => <AlbumsPage globalState={this.props.globalState} routeLocation={ev} /> } />
        <Route path='/album*' render={ ev => <AlbumPage globalState={this.props.globalState} routeLocation={ev} /> } />
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
