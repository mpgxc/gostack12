import axios from 'axios';

export default axios.create({
  baseURL: "http://192.168.0.8:3333"
})