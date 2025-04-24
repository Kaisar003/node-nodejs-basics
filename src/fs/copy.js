import fs from 'fs/promises';

const copy = async () => {
    const srcFolder = 'files';
    const destFolder = 'files_copy';

    try {
        await fs.access(srcFolder);

        try {
            await fs.access(destFolder);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        await fs.mkdir(destFolder);

        const files = await fs.readdir(srcFolder);

        for (const file of files) {
            await fs.copyFile(`${srcFolder}/${file}`, `${destFolder}/${file}`);
        }

    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
