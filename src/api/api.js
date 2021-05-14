import axios from 'axios';

export async function postUser(values) {
      const response = await axios.post('http://localhost:5000/api/v1/register', values);
      return response;
  }