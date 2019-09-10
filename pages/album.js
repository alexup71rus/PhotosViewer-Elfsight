import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Albums } from '../components/Albums';
import { getPhoto, getAlbums, getPhotos } from '../apis';
import { getUsers } from '../apis';
import { ImageBlock } from '../components/ImageBlock';
import { Popup } from '../components/Popup';

export class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumId: this.props.routes.match.params[0],
      album: {},
      popupImage: 0,
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
  }

  componentDidUpdate() {
    if (this.props.routes.location.search) {
      const chunk = this.props.routes.location.search.match(/\image=(\d)/);
      if (this.state.popupImage === 0 && chunk[0] && chunk[1] > 0) {
        this.setState({popupImage: chunk[1]});
      } else if (!chunk && this.state.popupImage !== 0) {
        this.setState({popupImage: 0});
      }
    }
  }

  render() {
    return (
      <div>
        {
          this.props.routes.location.search && this.state.popupImage > 0 ?
            <Popup image={this.state.images.filter(image => {
              if (image.id === +this.state.popupImage) {
                return image;
              }
            })} /> :
            null
        }
        <Link to={this.state.album.uid ? `/id${this.state.album.uid}` : '/'}>Назад</Link>
        <ImageBlock images={this.state.images} />
      </div>
    );
  }
}

