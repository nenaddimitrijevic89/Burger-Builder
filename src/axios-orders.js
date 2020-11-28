import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-3f9c7.firebaseio.com/'
});

export default instance;