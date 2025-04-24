import fs from 'fs'

const write = async () => {
    // Write your code here 
    const fileStream = fs.createWriteStream('files/fileToWrite.txt');

    process.stdin.pipe(fileStream);

    fileStream.on('error', (err) => {
        console.error('Error reading the file:', err);
    });
};

await write();