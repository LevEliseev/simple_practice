function findMedian(arr) {
    if (arr.length % 2 != 0) return arr[Math.floor(arr.length / 2)];
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
}
function processData(input) {
    //Enter your code here
    //input
    let [N, X, F] = input.split('\n');
    xArray = X.split(' ');
    fArray = F.split(' ');
    for (let i = 0; i < +N; i++) {
        xArray[i] = +xArray[i];
        fArray[i] = +fArray[i];
    }
    //solution
    let sArray = [], counter = 1;
    for (let i = 0; i < fArray.length; i++) {
        for (let j = 0; j < fArray[i]; j++) {
            sArray.push(xArray[i]);
        }
    }
    sArray.sort((a, b) => a - b);
    let medL, medU;
    if (sArray.length % 2 != 0) {
        medL = findMedian(sArray.slice(0, Math.floor(sArray.length / 2)));
        medU = findMedian(sArray.slice(Math.floor(sArray.length / 2) + 1));
    } else {
        medL = findMedian(sArray.slice(0, sArray.length / 2));
        medU = findMedian(sArray.slice(sArray.length / 2));
    }
    console.log((medU - medL).toFixed(1));
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