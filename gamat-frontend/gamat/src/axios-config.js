import axios from 'axios';

const instance = axios.create({
   // baseURL: 'http://localhost:8080/'
    baseURL: 'https://pingeso-backend.herokuapp.com/'
});

export default instance;