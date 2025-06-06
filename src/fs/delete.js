import fs from 'fs/promises';

const remove = async () => {
    // Write your code here 
    const filePath = './files/fileToRemove.txt'

    try {
        await fs.access(filePath);
        fs.rm(filePath)
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();