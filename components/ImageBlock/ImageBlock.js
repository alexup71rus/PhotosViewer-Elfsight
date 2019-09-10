import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './style.scss';

export const ImageBlock = (props) => <div>
  <ul>
    {
      props.images.map(image => <li key={image.id}>
          {/* <Link to={`/id${user.id}`}>{user.name}</Link> */}
        </li>)
    }
  </ul>
</div>;