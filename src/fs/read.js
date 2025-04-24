import fs from 'fs/promises';

const read = async () => {
    // Write your code here 
    const filePath = 'files/fileToRead.txt'

    try {
        await fs.access(filePath);
        const data = await fs.readFile(filePath, 'utf8');
        console.log(data)
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();