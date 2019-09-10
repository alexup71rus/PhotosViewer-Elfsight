import { dbVendor } from '../settings';

/**
 * 
 */
export const getUsers = () => {
  return fetch(dbVendor + "alexup71rus/photosviewer-elfsight/users").then(res => res.json());
}

/**
 * 
 */
export const getPhotos = (uid, query = {
  album_id: 0, limit: 0, page: 0
}) => {
  return fetch(dbVendor + "alexup71rus/photosviewer-elfsight/photos?uid=" + uid + 
  (query.album_id ? '&album_id=' + query.album_id : '') + 
  (query.limit ? '&_limit=' + query.limit : '') + 
  (query.page ? '&_page=' + query.page : '')).then(res => res.json());
}

/**
 * 
 */
export const getAllPhotos = (query = { limit: 0, page: 0 }) => {
  return fetch(dbVendor + "alexup71rus/photosviewer-elfsight/photos" + (limit ? '?_limit=' + query.limit : '')).then(res => res.json());
}

/**
 * 
 */
export const getAlbums = (id, uid) => {
  return fetch(dbVendor + "alexup71rus/photosviewer-elfsight/albums?id="+ (id ? id : '') + (uid ? '&uid=' + uid : '')).then(res => res.json());
}