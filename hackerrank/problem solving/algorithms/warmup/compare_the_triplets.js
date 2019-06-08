'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function diffBetween(x, y) {
    return (x > y) ? 1 : (x < y) ? -1 : 0;
}

function compareTriplets(a, b) {
    let arr = [0, 0];
    a.forEach((el, i) => {
        if (diffBetween(el,b[i]) == 1) arr[0]++;
        else if(diffBetween(el,b[i]) == -1) arr[1]++;
    });
    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}