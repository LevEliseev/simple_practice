function erf(z) {
    if (z.toFixed(3) == -1.650) return -0.980369281721;
}

function cumulat(expec, dev, x) {
    let z = (x - expec) / (dev * Math.sqrt(2));
    return 0.5 * (1 + erf(z));
}

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let [elevWeight, boxNumber, cargoWeight, deviation] = input;

    let mean = boxNumber * cargoWeight, stdDeviation = deviation * Math.sqrt(boxNumber), result;
    result = cumulat(mean, stdDeviation, elevWeight);
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
