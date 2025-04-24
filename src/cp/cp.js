import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn('node', ['files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    child.on('error', (err) => {
        console.error('Failed to start child process:', err);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
