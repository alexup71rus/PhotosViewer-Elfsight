const vendor = "https://my-json-server.typicode.com/";

export const getUsers = (limit) => {
  return fetch(vendor + "alexup71rus/photosviewer-elfsight/users").then(res => res.json());
}