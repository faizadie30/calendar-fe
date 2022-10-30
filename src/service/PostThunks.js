import axios from 'axios';

const { VITE_BASE_URL } = import.meta.env;

const PostThunks = (path, credentials = false, data, config = {}) => {
  config.url = `${VITE_BASE_URL}${path}`;
  config.headers = {
    'Content-Type': 'application/json',
  };
  config.method = 'POST';
  config.data = data;
  config.withCredentials = credentials;

  const promise = new Promise((resolve, reject) => {
    resolve(axios(config));
  });
  return promise;
};

export default PostThunks;
