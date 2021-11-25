import axios, {AxiosRequestConfig} from 'axios';
import {ALBUMS, BASE_URL, USERS} from '../constants/Api';
export const getAlbum = async () => {
  const url = BASE_URL + ALBUMS;
  const config: AxiosRequestConfig = {
    headers: {'Content-Type': 'application/json'},
  };
  const response = await axios.get(url, config);
  if (response.status !== 200) {
    console.log('Error ====> ', JSON.stringify(response));
    throw Error('Something went wrong');
  }
  return response?.data;
};
export const getUsers = async (id: any) => {
  const url = BASE_URL + USERS + id;
  const config: AxiosRequestConfig = {
    headers: {'Content-Type': 'application/json'},
  };
  const response = await axios.get(url, config);
  if (response.status !== 200) {
    console.log('Error ====> ', JSON.stringify(response));
    throw Error('Something went wrong');
  }
  return response?.data;
};
