'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function getMaxLessThanK(n, k) {
    let S = new Array(n), max = 0;
    for (let i = 0; i < n; i++) {
        S[i] = i + 1;
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let x = S[i] & S[j];
            if (x < k && x > max) max = x;
        }
    }
    return max;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}