//const example = require('./example.json');
//console.log(example);

//for (let i = 0; i < example.length; i++) {
    //for (let j = 0; j < example[i].length; j++) {
        //console.log(example[i][j]);
    //}
    //console.log(example[i]);
//}

const fs = require('fs');
let data = fs.readFileSync('./example.json');

let example = JSON.parse(data);
for (let i = 0; i < example.length; i++) {
    console.log(example[i]);
    console.log(example[i].batters);

}