import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d8a19.firebaseio.com/'
});

export default instance;