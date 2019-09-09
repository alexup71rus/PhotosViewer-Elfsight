import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Albums } from '../components/Albums';
import { getUsers, getAlbums, getPhotos } from '../apis';
import { imageVendor } from '../settings';
import { getUsers } from '../apis';

export class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumId: this.props.routes.match.params[0],
      uid: 0,
      album: {},
      images: []
    }

    getAlbums(this.state.albumId).then(album => {
      this.setState({album: album[0]});
      this.props.globalState.users.forEach(user => {
        if (user.id == album[0].uid) {
          this.setState({uid: user.id});
        }
      });
    });
  }

  render() {
    return (
      <div>
        <Link to={`/id${this.state.uid}`}>Назад</Link>
        {/* {
          this.props.globalState.users.length ? this.props.globalState.users[this.props.routes.match.params[0]-1].name : "..."
        } */}
      </div>
    );
  }
}

