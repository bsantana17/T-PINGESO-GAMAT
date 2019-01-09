import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://localhost:8080/',
    // baseURL: 'https://pingeso-backend.herokuapp.com/'
    headers: {
        'Content-Type':'application/json;charset=UTF-8'
       
      }
});
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
export default instance;