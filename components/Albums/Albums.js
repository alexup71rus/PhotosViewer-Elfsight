import React, { Component } from 'react';

export const Albums = ({albums}) => {
  console.log(albums);
  return <div>
  <figure>
  <p><img src='' /></p>
    <figcaption>{albums.name}</figcaption>
  </figure>
</div>
};