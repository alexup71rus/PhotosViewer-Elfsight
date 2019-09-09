import React, { Component } from 'react';

export const Albums = ({albums}) => {
  console.log(albums);
  return <div>
  {
    albums.map(album => (<figure key={album.id}>
      <p><img src='' /></p>
      <figcaption>{album.name} ({album.count})</figcaption>
    </figure>))
  }
</div>
};