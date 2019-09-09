import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
// import { Albums } from '../components/Albums';
// import { getUsers } from '../apis';
import { addUsersAction } from '../actions';

export class Albums extends Component {
  constructor(props) {
    super(props);

    // if (props.globalState.users.length === 0) {
    //   getUsers(5).then(users => {
    //     props.addUsersAction(users);
    //   });
    // }
  }

  render() {
    return (
      <div>
        Albums
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
  
Albums = connect(mapStateToProps, mapDispatchToProps)(Albums);
