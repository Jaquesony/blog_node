const fs = require('fs')

// u can use encoding utf8 or toString within a data to done it
const readStream = fs.createReadStream('../docs/blog3.txt', {encoding:"utf8"});
const writeStream = fs.createWriteStream('../docs/blog4.txt');
const writeStream1 = fs.createWriteStream('../docs/blog6.txt');


readStream.on('data',(chunck)=>{
    console.log('------NEW CHUNK------');
    console.log(chunck);
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunck)
})
// or
const readStream1 = fs.createReadStream('../docs/blog3.txt');

readStream1.on('data',(chunck)=>{
    console.log('------NEW CHUNK------');
    console.log(chunck.toString());
})

// Another way to use the write stream using piping
readStream.pipe(writeStream1)