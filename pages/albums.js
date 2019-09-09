import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { Albums } from '../components/Albums';
import { getUsers, getAlbums } from '../apis';
import { addUsersAction } from '../actions';

export class AlbumsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }

    if (props.globalState.users.length === 0) {
      getAlbums(5).then(albums => {
        this.state.albums = albums;
      });
    }
  }

  render() {
    return (
      <div>
        <Link to={`/`}>Назад</Link>
        <h1>Albums of {
          this.props.globalState.users.length ? this.props.globalState.users[this.props.routes.match.params[0]-1].name : "..."
        }</h1>
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
  
AlbumsPage = connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);
