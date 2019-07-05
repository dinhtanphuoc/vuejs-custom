import axios from 'axios';
import { camelizeKeys } from 'humps';
import config from '../constants/configAPI';

const { API_URL } = config;
const token = 'aaaaaaa';

export const apiDefault = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: 0,
    Authorization: `Bearer ${token}`
  },
  transformResponse: [function (data) {
    if (!data) {
      return {};
    }
    return camelizeKeys(typeof data !== 'object' ? JSON.parse(data) : data);
  }]
});
