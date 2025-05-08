const fs = require("node:fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("about.txt", {
    encoding : "utf-8",
    highWaterMark : 5
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./about.txt.gz"));