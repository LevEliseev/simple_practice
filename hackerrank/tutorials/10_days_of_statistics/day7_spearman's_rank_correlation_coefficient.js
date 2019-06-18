function processData(input) {
    //Enter your code here
    //input
    input = input.split('\n');
    let [n, xSet, ySet] = input;
    xSet = xSet.trim();
    ySet = ySet.trim();
    xSet = xSet.split(' ');
    ySet = ySet.split(' ');
    for (let i = 0; i < n; i++) {
        xSet[i] = Number.parseFloat(xSet[i]);
        ySet[i] = Number.parseFloat(ySet[i]);
    }
    //solution
    let xSorted = [...xSet], ySorted = [...ySet];
    xSorted.sort((a, b) => a - b);
    ySorted.sort((a, b) => a - b);
    let dI = [], sum, result;

    for (let i = 0; i < n; i++) {
        dI.push((xSorted.indexOf(xSet[i]) - ySorted.indexOf(ySet[i])) ** 2);
    }

    sum = dI.reduce((a, b) => a + b);
    result = 1 - (6 * sum) / (n * (n ** 2 - 1));

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
