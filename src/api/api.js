import axios from 'axios';

export async function postUser(values) {
      const response = await axios.post('https://corona-tn.herokuapp.com/api/v1/register', values);
      return response;
  }