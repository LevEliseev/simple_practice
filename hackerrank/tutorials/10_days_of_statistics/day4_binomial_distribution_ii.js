function fac(n) {
    if (!n) return 1;
    return n * fac(n - 1);
}

function Bernoulli(x, n, p) {
    let q, result = 0;
    q = 1 - p;
    for (; x <= n; x++) {
        result += (fac(n) / (fac(n - x) * fac(x))) * (p ** x) * (q ** (n - x));
    }
    return result.toFixed(3);
}

function processData(input) {
    //Enter your code here
    let [p, n] = input.split(' ');
    p = +p;
    n = +n;
    p /= 100;

    console.log(Bernoulli(8, n, 1 - p));
    console.log(Bernoulli(2, n, p));
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