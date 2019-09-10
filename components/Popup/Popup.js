import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { getPhotos } from '../apis';

export const Popup = ({image}) => {
    return <div className='modal'>
      <button className='close'>x</button>
      <img src={image.url} />
    </div>;
  };