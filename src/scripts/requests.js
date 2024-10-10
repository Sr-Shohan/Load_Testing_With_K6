import http from 'k6/http';
import { config } from '../config/config.js';

export function getCrocodiles() {
  return http.get(`${config.baseUrl}/public/crocodiles/`);
}
