import fs from 'fs'

const read = async () => {
    // Write your code here 
    const fileStream = fs.createReadStream('files/fileToRead.txt');

    fileStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    fileStream.on('error', (err) => {
        console.error('Error reading the file:', err);
    });
};

await read();