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
    this._isMounted = false;
    const self = this;
    this.state = {
      albumId: this.props.routeLocation.match.params[0],
      album: {},
      popupImageKey: null,
      popupImageId: 0,
      images: []
    }

    document.onkeyup = function (e) {
      if (e.key == "Escape" || e.code == "Escape") {
        self.props.routeLocation.history.push('?');
      } else if (self.props.routeLocation.location.search) {
        if (e.key === 'ArrowRight' &&
          e.code === 'ArrowRight' &&
          self.state.images[self.state.popupImageKey+1]) {
            self.props.routeLocation.history.push(`?image=${self.state.images[self.state.popupImageKey+1].id}`);
        } else if (e.key === 'ArrowLeft' &&
          e.code === 'ArrowLeft' &&
          self.state.images[self.state.popupImageKey-1]) {
            self.props.routeLocation.history.push(`?image=${self.state.images[self.state.popupImageKey-1].id}`);
        }
      }
    }
  }

  componentDidUpdate() {
    if (this.props.routeLocation.location.search) {
      const chunk = this.props.routeLocation.location.search.match(/\image=(\d)/);
      if (chunk[0] && chunk[1] > 0 && (this.state.popupImageId === 0 || this.state.popupImageId !== chunk[1])) {
        this.state.images.filter((image, i) => {
          if (image.id === +chunk[1]) {
            if (this.state.popupImageKey !== i) {
              this.setState({popupImageId: chunk[1], popupImageKey: i});
            }
            return image;
          }
        });
      } else if (!chunk && this.state.popupImageId !== 0) {
        this.setState({popupImageId: 0, popupImageKey: null});
      }
    }
  }

  componentDidMount() {
    this._isMounted = true;

    this._isMounted && getAlbums(this.state.albumId)
    .then(album => {
      this._isMounted && getPhotos(album[0].uid, {album_id: this.state.albumId})
      .then(images => {
        this._isMounted && this.setState({images: images, album: album[0]});
      });
    });
    
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        {
          !!this.props.routeLocation.location.search &&
          this.state.popupImageKey !== null &&
          <Popup
            image={this.state.images[this.state.popupImageKey]}
            routeLocation={this.props.routeLocation}
            />
        }
        <Link to={this.state.album.uid ? `/id${this.state.album.uid}` : '/'}>Назад</Link>
        <h1>Album {this.state.album.name}</h1>
        <ImageBlock images={this.state.images} />
      </div>
    );
  }
}

