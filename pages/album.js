import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Albums } from '../components/Albums';
import { getUsers, getAlbums, getPhotos } from '../apis';
import { imageVendor } from '../settings';

export class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    } 
  }

  render() {
    console.log(this.props.globalState.users[this.props.routes.match.params[0]-1]);
    return (
      <div>
        <Link to={`/`}>Назад</Link>
        {/* {
          this.props.globalState.users.length ? this.props.globalState.users[this.props.routes.match.params[0]-1].name : "..."
        } */}
      </div>
    );
  }
}

