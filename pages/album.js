import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Albums } from '../components/Albums';
import { getPhoto, getAlbums, getPhotos } from '../apis';
import { imageVendor } from '../settings';
import { getUsers } from '../apis';
import { ImageBlock } from '../components/ImageBlock';
import { Popup } from '../components/Popup';
import { imageVendor } from '../settings';

export class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumId: this.props.routes.match.params[0],
      album: {},
      popupImage: {},
      images: []
    }

    getAlbums(this.state.albumId)
    .then(album => {
      this.setState({album: album[0]});
      getPhotos(album[0].uid, {album_id: this.state.albumId})
      .then(images => {
        this.setState({images: images});
      });
    });

    if (this.props.routes.location.search) {
      const chunk = this.props.routes.location.search.match(/\image=(\d)/);
      if (chunk[0] && chunk[1] > 0) {
        getPhoto(chunk[1])
        .then(image => {
          image.url = imageVendor + image.url;
          this.setState({popupImage: image});
        });
      }
    }
  }

  render() {
    return (
      <div>
        {
          this.props.routes.location.search ? <Popup image={this.state.popupImage} /> : null
        }
        <Link to={this.state.album.uid ? `/id${this.state.album.uid}` : '/'}>Назад</Link>
        <ImageBlock images={this.state.images} />
      </div>
    );
  }
}

