import axios from 'axios';

const { VITE_BASE_URL } = import.meta.env;

const GetThunk = async (path, config = {}) => {
  config.url = `${VITE_BASE_URL}${path}`;
  config.method = 'GET';
  config.headers = {
    'Content-Type': 'application/json',
  };
  const promise = new Promise((resolve, reject) => {
    resolve(axios(config));
  });
  return promise;
};

export default GetThunk;
