function fac(n) {
    if (!n) return 1;
    return n * fac(n - 1);
}
function Poisson(k, lam) {
    return ((lam ** k) * (Math.E ** -lam)) / fac(k);
}
function processData(input) {
    //Enter your code here
    let [lam, k] = input.split('\n');
    k = +k;
    lam = +lam;

    console.log(Poisson(k, lam).toFixed(3));
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