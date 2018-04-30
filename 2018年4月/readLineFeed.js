let fs =require('fs');
let data = fs.readFileSync('lineFeed.txt');
console.log(data.toString());