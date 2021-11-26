import {ALBUMS, BASE_URL, USERS} from '../constants/Api';
export const getAlbum = async () => {
  const url = BASE_URL + ALBUMS;
  const json = await fetch(url);
  const response = await json.json();
  return response;
};
export const getUsers = async (id: any) => {
  const url = BASE_URL + USERS + id;
  const json = await fetch(url);
  const response = await json.json();
  return response;
};
