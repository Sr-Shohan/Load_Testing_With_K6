import { check } from 'k6';

export function validateStatusCode(response, expectedStatusCode = 200) {
  return check(response, {
    [`status code ${expectedStatusCode}`]: (r) => r.status === expectedStatusCode,
  });
}
