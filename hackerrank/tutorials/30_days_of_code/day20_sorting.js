process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    let numberOfSwaps = 0, flag;
    for (let i = 0; i < n; i++) {
        flag = 0;
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = swap(a[j], a[j + 1]);
                numberOfSwaps++;
                flag++;
            }
        }

        if (!flag) break;
    }
    console.log(`Array is sorted in ${numberOfSwaps} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[n - 1]}`);
}
