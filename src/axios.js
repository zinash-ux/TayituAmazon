import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
   baseURL: 'https://us-central1-tayitupro.cloudfunctions.net/api',
});

export default instance;
//http://localhost:5001/tayitupro/us-central1/api