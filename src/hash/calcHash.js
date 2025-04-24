import fs from 'fs'
import crypto from 'crypto'

const calculateHash = async () => {
    // Write your code here
    const hash = crypto.createHash('sha256');
    const fileStream = fs.createReadStream('files/fileToCalculateHashFor.txt')

    fileStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    fileStream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(fileHash);
    });

    fileStream.on('error', (err) => {
        console.error('Error reading the file:', err);
    });
};

await calculateHash();