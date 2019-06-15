function geom(n, p) {
    let q = 1 - p;
    return ((q ** (n - 1)) * p).toFixed(3);
}

function processData(input) {
    //Enter your code here
    let [S1, S2] = input.split('\n');
    S1 = S1.split(' ');
    let p = S1[0] / S1[1];
    let n = +S2;

    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += +geom(i, p);
    }
    console.log(result.toFixed(3));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});