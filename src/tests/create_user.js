import http from 'k6/http';
import { check, sleep } from 'k6';
import { config, headers } from '../config/config.js';
import { postUser } from '../scripts/requests.js';
import { userPayload } from '../config/userPayload.js';

export const options = {
    vus: 3,
    duration: '15s',
};

export default function () {
    const payload = JSON.stringify(userPayload);
    const response = postUser(config.baseUrl, payload, headers);

    console.log('Response status: ' + response.status);
    console.log('Response body: ' + response.body);

    check(response, {
        'status code 201': (r) => r.status === 502,
        // 'response time < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1);
}
