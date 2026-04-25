const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('/Users/ketanpillai/Desktop/Code/portfolio-1/src/assets/Ketan Pillai.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(console.error);
