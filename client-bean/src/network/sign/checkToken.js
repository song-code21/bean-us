import axios from 'axios';

axios.defaults.withCredentials = true;

const http = process.env.REACT_APP_HTTPURL;

export function checkToken(userId, password) {
  return axios.get(`${http}/check-token`, { headers: { 'Content-Type': 'application/json' } });
}
