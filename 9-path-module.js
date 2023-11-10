const path = require('path')
console.log("Path sep: ", path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log("Filepath: ", filePath);

const base = path.basename(filePath)
console.log("base: ",base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);