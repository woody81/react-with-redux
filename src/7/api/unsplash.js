import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4FcnwShCeBYekM5OUEhGvTIHP2lxxExGh36Bfhut4jg'
  }
})