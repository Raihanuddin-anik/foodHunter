import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',
    timeout: 15000,
   
  });

  const responseBody = (res) => res.data.categories;

  const requests = {
      get: (url) => instance.get(url).then(responseBody),
      post: (url, body) =>
          instance.post(url, body).then(responseBody),
      patch: (url, body) =>
          instance.patch(url, body).then(responseBody),
      delete: (url) => instance.delete(url).then(responseBody),
  };
  
  export default requests;