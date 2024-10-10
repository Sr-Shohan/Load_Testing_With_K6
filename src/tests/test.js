import { getCrocodiles } from '../scripts/requests.js';
import { validateStatusCode } from '../scripts/checks.js';
import { sleep } from 'k6';

export const options = {
  vus: 300, 
  duration: '55s',
};



export default function () {
  const response = getCrocodiles();
  validateStatusCode(response);
  sleep(1);  // Add sleep to simulate realistic load patterns
}