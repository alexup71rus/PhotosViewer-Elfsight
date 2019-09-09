import React, { Component } from 'react';

export const Albums = ({albums}) => <div>
  {
    albums.map(album => {
      return <figure key={album.id}>
        <p><img src={album.cover} /></p>
        <figcaption>{album.name} ({album.count})</figcaption>
      </figure>;
    })
  }
</div>;