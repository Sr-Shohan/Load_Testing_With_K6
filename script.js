import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 3, 
  duration: '15s'
}

const baseUrl = "https://test-api.k6.io";

export default function(){
  const resp = http.get(`${baseUrl}/public/crocodiles/`);
  check(resp, {
    'status code 200':r => r.status ===200
  })
}

// export default function () {
//   // Make a GET request to a random endpoint on the test site
//   const endpoint = Math.random() < 0.5 ? 'images' : 'api';
//   const res = http.get(`https://test.k6.io/${endpoint}`);

//   // Check if the request was successful and track the success rate
//   const isSuccess = check(res, {
//     'status is 200': (r) => r.status === 200,
//     'content type is text': (r) => r.headers['Content-Type'] === 'text/html',
//   });
//   successRate.add(isSuccess);

//   // Simulate user think time by sleeping for a random amount of time
//   const thinkTime = Math.floor(Math.random() * 4) + 2; // Sleep for 2-5 seconds
//   sleep(thinkTime);

//   // Log the details of the request
//   console.log(` Print: [${new Date().toISOString()}] ${res.request.method} ${res.request.url} - ${res.status}`);
// }
