const fs = require('node:fs');

const readableStream = fs.createReadStream("about.txt", {
    encoding: 'utf8',
    highWaterMark : 5
});

const writableStream = fs.createWriteStream("about_copy.txt");

/* Below first and second methods will be doing the same task as these are asynchronous in nature,
so they will be writing the text in jumbled way as they are not executing line wise. */

// First way to write data into file
readableStream.on("data", (chunk)=>{
    console.log(chunk);
    writableStream.write(chunk);
});

// second way to write data into file
readableStream.pipe(writableStream);