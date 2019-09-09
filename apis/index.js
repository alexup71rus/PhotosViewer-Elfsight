const vendor = "https://my-json-server.typicode.com/";

export const getUsers = () => {
  return fetch(vendor + "alexup71rus/photosviewer-elfsight/users").then(res => res.json());
}

export const getPhotos = (album, id) => {
  return fetch(vendor + "alexup71rus/photosviewer-elfsight/photos?uid=" + album + (id ? '&id=' + id : '')).then(res => res.json());
}

export const getAllPhotos = (limit) => {
  return fetch(vendor + "alexup71rus/photosviewer-elfsight/photos" + (limit ? '?_limit=' + limit : '')).then(res => res.json());
}

export const getAlbums = (uid) => {
  return fetch(vendor + "alexup71rus/photosviewer-elfsight/albums?uid=" + (uid ? '&uid=' + uid : '')).then(res => res.json());
}