'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    if (s.match(/PM/)) {
        if(+s.slice(0,2) == 12){
            s = '12' + s.slice(2, -2);
        } else {
            s = +s.slice(0,2) + 12 + s.slice(2, - 2)
        }
    } else {
        if(+s.slice(0,2) == 12){
            s = '00' + s.slice(2, -2);
        } else {
            s = s.slice(0, -2);
        }
    }
    return s;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}