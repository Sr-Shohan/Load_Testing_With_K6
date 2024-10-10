import http from 'k6/http';
import { config } from '../config/config.js';

export function getCrocodiles() {
  return http.get(`${config.baseUrl}/public/crocodiles/`);
}



// Function to make a POST request for user registration
export function postUser(baseUrl, payload, headers) {
    const url = `${baseUrl}/user/register/`;  // Update the endpoint based on your API
    return http.post(url, payload, { headers });
}
