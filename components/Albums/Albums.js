import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Albums = ({albums}) => <div>
  {
    albums.map(album => {
      return <figure key={album.id} className='album-block'>
        <Link to={`/album${album.id}`} >
          <p><img src={album.cover} /></p>
          <figcaption>{album.name} ({album.count})</figcaption>
        </Link>
      </figure>;
    })
  }
</div>;