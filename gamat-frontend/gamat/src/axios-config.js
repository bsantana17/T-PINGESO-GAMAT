import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://pingeso-back.herokuapp.com/'
    baseURL: 'https://pingeso-backend.herokuapp.com/'
});

export default instance;