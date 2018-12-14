import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://pingeso-back.herokuapp.com/'
    baseURL: 'http://localhost:8080/'
});

export default instance;