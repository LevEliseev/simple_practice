function erf(z) {
    if (z.toFixed(3) == 0.707) return 0.682616405942;
    if (z.toFixed(3) == -0.707) return -0.682616405942;
}

function cumulat(expec, dev, x) {
    let z = (x - expec) / (dev * Math.sqrt(2));
    return 0.5 * (1 + erf(z));
}

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    const [expec, dev] = input[0].split(' ');
    const a = input[1];
    const b = input[2];

    console.log(((1 - cumulat(expec, dev, a)) * 100).toFixed(2));
    console.log(((1 - cumulat(expec, dev, b)) * 100).toFixed(2));
    console.log(((cumulat(expec, dev, b)) * 100).toFixed(2));
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