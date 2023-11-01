// const path  = require('path'); // inbuilt module in Node for handling file names and paths
// console.log(__filename);
// console.log(path.basename(__filename)); // to get the file name

// Importing the Required Modules 
const fs = require('fs'); 
const readline = require('readline'); 
  
// Creating a readable stream from file 
// readline module reads line by line  
// but from a readable stream only. 
const file = readline.createInterface({ 
    input: fs.createReadStream('networklog.txt'), 
    output: process.stdout, 
    terminal: false
}); 
  
// Printing the content of file line by 
//  line to console by listening on the 
// line event which will triggered 
// whenever a new line is read from 
// the stream 
var keys =[];
file.on('line', (line) => { 

    console.log(keys);
}); 




