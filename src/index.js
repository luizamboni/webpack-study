import axios from 'axios';

console.log('init!');

export default class ApiClient {

  constructor() {
  }

  getObjects() {
    return axios.get('https://api.spacexdata.com/v3/capsules')
  }
}