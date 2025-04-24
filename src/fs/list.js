import fs from 'fs/promises';

const list = async () => {
    // Write your code here 
    const filePath = './files'

    try {
        await fs.access(filePath);
        const files = await fs.readdir(filePath);
        console.log(files)
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();