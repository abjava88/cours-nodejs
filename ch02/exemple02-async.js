const fs = require('fs');
const path = require('path')
const filePath = path.join(__dirname,'files','rawFile.txt')
fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 

  moreWork(); // will run before console.log inside readFile

function moreWork(){
    console.log("More work")
}