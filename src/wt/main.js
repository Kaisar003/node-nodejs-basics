import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    // Write your code here
    const numCores = os.cpus().length;
    const results = new Array(numCores);
    let completedWorkers = 0;

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker('./worker.js');
        const numberToSend = 10 + i;

        worker.postMessage(numberToSend);

        worker.on('message', (result) => {
            results[i] = result;
            completedWorkers++;

            if (completedWorkers === numCores) {
                console.log(results);
            }
        });

        worker.on('error', () => {
            results[i] = { status: 'error', data: null };
            completedWorkers++;

            if (completedWorkers === numCores) {
                console.log(results);
            }
        });
    }
};

await performCalculations();