import { check } from 'k6';

export function validateStatusCode(response, expectedStatusCode = 200) {
  return check(response, {
    [`status code ${expectedStatusCode}`]: (r) => r.status === expectedStatusCode,
  });
}

// Check if the status code is 201 for the POST request (successfully created)
export function validateStatus201(response) {
    return check(response, {
        'status code 201': (r) => r.status === 201,
    });
}

// Check if the response time is less than 500ms
export function validateResponseTime(response) {
    return check(response, {
        'response time < 500ms': (r) => r.timings.duration < 500,
    });
}