import { Transform } from 'stream';

const transform = async () => {
    // Write your code here
    const reverseTransform = new Transform({
        transform(chunk, _, callback) {
            const reversed = chunk.toString().trim().split('').reverse().join('');
            this.push(reversed);
            callback();
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();