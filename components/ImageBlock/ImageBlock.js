import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { imageVendor } from '../../settings';

export const ImageBlock = (props) => <div>
  <ul>
    {
      props.images.map(image => <li key={image.id}>
          <Link to={`/id`}>
            <img src={imageVendor + image.url} className='image-block' />
          </Link>
        </li>)
    }
  </ul>
</div>;