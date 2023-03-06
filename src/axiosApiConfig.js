import axios from 'axios';
// import { notification } from './shared/helpers';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        console.error(error);
        // notification('error', 'Not authorized');
        localStorage.clear();
        window.location.href = '/login';
        break;
      case 403:
        console.error(error);
        // notification('error', 'Forbidden');
        break;
      default:
        console.error(error);
        break;
    }
  },
);

axiosInstance.interceptors.request.use((config) => {
  if ('staff' in localStorage) {
    let user = localStorage.getItem('staff');
    user = JSON.parse(user === null ? '' : user);
    config.headers.authorization = `Bearer ${user.accessToken}`;
    config.headers.strategy = 'local';
  }

  return config;
});

export default axiosInstance;
