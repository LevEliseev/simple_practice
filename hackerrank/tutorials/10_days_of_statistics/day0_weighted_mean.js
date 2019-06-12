function processData(input) {
    //Enter your code here
    let [N, X, W] = input.split('\n');
    xArray = X.split(' ');
    wArray = W.split(' ');
    for (let i = 0; i < +N; i++) {
        xArray[i] = +xArray[i];
        wArray[i] = +wArray[i];
    }
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < +N; i++) {
        sum1 += xArray[i] * wArray[i];
    }
    sum2 = wArray.reduce((a, b) => a + b);
    let result = sum1 / sum2;
    result = Math.round(result * 10) / 10;
    console.log(result.toFixed(1));
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