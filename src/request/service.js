import axios from 'axios'
import { backend_url } from '../configuration/config'
// import store from '../../storage'

const service = axios.create({
  baseURL: backend_url,
  // timeout: 10000,
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  crossdomain: true,
})

service.interceptors.request.use(config => {
  if((localStorage.getItem("auth_token") != undefined) || (localStorage.getItem("auth_token") != null))
  {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem("auth_token");
  }
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Access-Control-Expose-Headers'] = 'Content-Length,Content-Range';
  config.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS';
  // config.headers['Access-Control-Allow-Headers'] = 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
  config.headers['Cache-Control'] = 'no-store, no-cache';
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Security-Policy'] = 'upgrade-insecure-requests';
  return config;
})

service.interceptors.response.use(response => {
  return response.data
}, error => {
  if(error.response)
  {
    if (error.response.status && (error.response.status === 401)) {
      localStorage.removeItem("auth_token")
    }
  }
  if(error.response)
  {
    return error.response.data;
  }
  return Promise.reject(error);
})

export default service;