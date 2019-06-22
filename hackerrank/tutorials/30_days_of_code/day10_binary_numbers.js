'use strict';

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

function main() {
    const n = parseInt(readLine(), 10);

    let [x, c, number, max] = [n, 0, 0, 0];
    while (x > 1) {
        x = Math.floor(x / 2);
        c++;
    }
    
    const ar = new Array(c + 1);
    c = 0;
    for (let i = ar.length - 1; i >= 0; i--) {
        if (number + 2 ** i <= n) {
            ar[i] = 1;
            number += 2 ** i;
            c++;
        } else {
            ar[i] = c = 0;
        }
        if (max < c) max = c;
    }
    console.log(max);
}
