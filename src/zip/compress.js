import zlib from 'zlib';
import fs from 'fs';

const compress = async () => {
    // Write your code here 
    const gzip = zlib.createGzip();
    const input = fs.createReadStream('files/fileToCompress.txt');
    const output = fs.createWriteStream('files/archive.gz');

    input.pipe(gzip).pipe(output);
};

await compress();