function getMean(set) {
    return +(set.reduce((a, b) => a + b) / set.length).toFixed(3);
}

function getDev(set, mean) {
    let ar = [];
    set.forEach(el => {
        ar.push((el - mean) ** 2);
    });
    return +Math.sqrt(ar.reduce((a, b) => a + b) / set.length).toFixed(5);
}

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
    let xMean = getMean(xSet), yMean = getMean(ySet);
    let xDev = getDev(xSet, xMean), yDev = getDev(ySet, yMean);
    
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += ((xSet[i] - xMean) * (ySet[i] - yMean));
    }
    
    let result = sum / (n * xDev * yDev);

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
