function findMedian(arr) {
    if (arr.length % 2 != 0) return arr[Math.floor(arr.length / 2)];
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
}
function processData(input) {
    //Enter your code here
    let ind = input.indexOf('\n');
    input = input.substring(ind);
    input = input.split(' ');
    for (let i = 0; i < input.length; i++) input[i] = +input[i];
    input.sort((a, b) => a - b);
    let medL, medX, medU;
    if (input.length % 2 != 0) {
        medL = findMedian(input.slice(0, Math.floor(input.length / 2)));
        medX = findMedian(input);
        medU = findMedian(input.slice(Math.floor(input.length / 2) + 1));
    } else {
        medL = findMedian(input.slice(0, input.length / 2));
        medX = findMedian(input);
        medU = findMedian(input.slice(input.length / 2));
    }
    console.log(`${medL}\n${medX}\n${medU}`);
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