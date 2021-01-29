import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://5cc2bf77968a0b001496d996.mockapi.io/api/',
});

const getRequest = (endPoint: string, config?: object) => instance.get(endPoint, config);

const postRequest = (endPoint: string, body: object, config?: object) =>
  instance.post(endPoint, body, config);

const deleteRequest = (endPoint: string, config?: object) => instance.get(endPoint, config);

export default {
  getRequest,
  postRequest,
  deleteRequest,
};
