import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-test-f8cc8.firebaseio.com/'
})

export default instance; 