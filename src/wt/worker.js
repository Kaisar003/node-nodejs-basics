import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.on('message', (value) => {
        try {
            const result = nthFibonacci(value);
            parentPort.postMessage({ status: 'resolved', data: result });
        } catch {
            parentPort.postMessage({ status: 'error', data: null });
        }
    });
};

sendResult();