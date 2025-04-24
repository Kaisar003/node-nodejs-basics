import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
    // Write your code here 
    const gunzip = zlib.createGunzip();
    const input = fs.createReadStream('files/archive.gz');
    const output = fs.createWriteStream('files/fileToCompress.txt');

    input.pipe(gunzip).pipe(output);
};

await decompress();