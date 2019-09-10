import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Albums = ({albums}) => <ul>
  {
    albums.map(album => {
      return <li key={album.id}>
        <figure className='album-block'>
        {
          album.count ? (
            <Link to={`/album${album.id}`} >
              <p><img src={album.cover} /></p>
              <figcaption>{album.name} ({album.count})</figcaption>
            </Link>
          ) : (
            <span>
              <p><img src={album.cover} /></p>
              <figcaption>{album.name} ({album.count})</figcaption>
            </span>
          )
        }
        </figure>
      </li>;
    })
  }
</ul>;