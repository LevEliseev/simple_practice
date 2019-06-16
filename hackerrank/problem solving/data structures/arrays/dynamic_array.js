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

// Complete the dynamicArray function below.
function sum(a, b) {
    return a ^ b;
}

function dynamicArray(n, queries) {
    const seqList = [];
    for (let i = 0; i < n; i++) {
        seqList.push([]);
    }
    let result = [], lastAnswer = 0, type, x, y, size;

    for (let i = 0; i < queries.length; i++) {
        type = queries[i][0];
        x = queries[i][1];
        y = queries[i][2];
        if (type == 1) {
            seqList[sum(x, lastAnswer) % n].push(y);
        } else if (type == 2) {
            size = seqList[sum(x, lastAnswer) % n].length;
            lastAnswer = seqList[sum(x, lastAnswer) % n][y % size];
            result.push(lastAnswer);
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}