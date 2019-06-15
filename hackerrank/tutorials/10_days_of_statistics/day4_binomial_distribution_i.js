function fac(n) {
    if (!n) return 1;
    return n * fac(n - 1);
}

function processData(input) {
    //Enter your code here
    let [a, b] = input.split(' ');
    a = +a;
    b = +b;
    let x, n, p, q, result = 0;
    x = 3; //number of successes
    n = 6; //total number of trials
    p = a / (a + b);  //probability of success
    q = 1 - p; //probability of failure
    for (x = 3; x <= n; x++) {
        result += (fac(n) / (fac(n - x) * fac(x))) * (p ** x) * (q ** (n - x));
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