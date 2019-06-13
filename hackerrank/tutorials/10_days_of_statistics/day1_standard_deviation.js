function processData(input) {
    //Enter your code here
    //input
    let ind = input.indexOf('\n');
    input = input.substring(ind);
    input = input.split(' ');
    for (let i = 0; i < input.length; i++) input[i] = +input[i];
    //solution
    let mean, arr = [], n = input.length, result;
    mean = input.reduce((a, b) => a + b) / input.length;
    input.forEach(el => {
        arr.push((el - mean) ** 2);
    });
    result = Math.sqrt(arr.reduce((a, b) => a + b) / n).toFixed(1);
    console.log(result);
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