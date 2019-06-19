function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let n = input.length, el, xSum = ySum = xSquare = xySum = 0, xMean, yMean;
    for (let i = 0; i < n; i++) {
        el = input[i].split(' ');
        xSum += +el[0];
        ySum += +el[1];
        xSquare += el[0] ** 2;
        xySum += el[0] * el[1];
    }
    xMean = xSum / n;
    yMean = ySum / n;

    let a, b;
    b = (n * xySum - xSum * ySum) / (n * xSquare - xSum ** 2);
    a = yMean - b * xMean;

    console.log((a + b * 80).toFixed(3));
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
