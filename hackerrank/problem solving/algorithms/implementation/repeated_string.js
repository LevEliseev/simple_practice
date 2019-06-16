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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let head, tail, headSearch, tailSearch, count = 0, rExp = new RegExp(/a/gi);

    head = Math.floor(n / s.length);
    tail = n % s.length;
    headSearch = s.match(rExp);
    tailSearch = s.slice(0, tail).match(rExp);

    if (headSearch) count += head * headSearch.length;
    if (tailSearch) count += tailSearch.length;

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}