import fs from 'fs/promises';

const create = async () => {
    // Write your code here 
    const filePath = './files/fresh.txt'

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young');
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await create();