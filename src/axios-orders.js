import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-36a4f-default-rtdb.firebaseio.com/'
});

export default instance;