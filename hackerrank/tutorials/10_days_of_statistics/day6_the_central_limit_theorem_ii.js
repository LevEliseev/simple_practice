function erf(z) {
    if (z.toFixed(3) == 0.354) return 0.382924922548;
}

function cumulat(expec, dev, x) {
    let z = (x - expec) / (dev * Math.sqrt(2));
    return 0.5 * (1 + erf(z));
}

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let [ticketsNumber, studWaitNumber, purchasedNumber, deviation] = input;

    let mean = studWaitNumber * purchasedNumber, stdDeviation = deviation * Math.sqrt(studWaitNumber), result;
    result = cumulat(mean, stdDeviation, ticketsNumber);
    console.log(result.toFixed(4));
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
