import fs from 'fs/promises';

const rename = async () => {
    // Write your code here 
    const oldName = 'files/wrongFilename.txt';
    const newName = 'files/properFilename.md';

    try {
        await fs.access(oldName);

        try {
            await fs.access(newName);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        await fs.rename(oldName, newName);

    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();