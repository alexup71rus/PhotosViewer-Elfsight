import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { getPhotos } from '../apis';
import { imageVendor } from '../../settings';

export const Popup = ({image}) => {
  image = image[0];
    return <div className='modal'>
      <button className='close'>x</button>
      {
        image ?
          <img src={imageVendor + image.url} /> :
          <div className='loading-label'>Loading</div>
      }
    </div>;
  };