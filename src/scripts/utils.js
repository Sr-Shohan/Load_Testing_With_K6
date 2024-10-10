import { readFileSync } from 'fs';

// Function to read the JSON payload from an external file
export function getPayload() {
    const payload = readFileSync('src/config/userPayload.json');  // Load the file
    return JSON.stringify(JSON.parse(payload));  // Return JSON body as string
}
