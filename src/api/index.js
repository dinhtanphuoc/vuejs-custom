import axios from 'axios';
import { camelizeKeys } from 'humps';
import config from '../constants/configAPI';

const { BASE_URL } = config;
const token = '';

const apiDefault = (uri = '', options = {}) => {
  console.log(3444444444444)
  axios.create({
    baseURL: `${BASE_URL}/${uri}`,
    responseType: 'json',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: 0,
      token,
      ...options.headers
    },
    ...options,
    transformResponse: [function onConvertResponse(data) {
      if (!data) {
        return {};
      }
      camelizeKeys(typeof data !== 'object' ? JSON.parse(data) : data);
    }]
  })
}

export default apiDefault
