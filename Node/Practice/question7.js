"use strict";

/* 1. Create a Buffer from a String */
const buffer1 = Buffer.from("Hello, Node.js!");
console.log(buffer1);
console.log(buffer1.toString());
console.log(buffer1.toJSON());

/*2. Allocate a Buffer of size 10 and write Ashok in the buffer at index 2 */
const buffer2 = Buffer.alloc(10);
buffer2.write("ashok", 2);
console.log(buffer2);
console.log(buffer2.toString());
console.log(buffer2.toJSON());

/* 3. Concatenate two buffers */
const buffer3 = Buffer.from("Node")
const buffer4 = Buffer.from("JS")
const concatenated_buffer = Buffer.concat([buffer3, buffer4]);
console.log(concatenated_buffer.toString());