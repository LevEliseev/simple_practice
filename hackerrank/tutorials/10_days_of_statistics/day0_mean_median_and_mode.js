function processData(input) {
    //Enter your code here
    let ind = input.indexOf('\n');
    input = input.substring(ind);
    input = input.split(' ');
    for (let i = 0; i < input.length; i++) input[i] = +input[i];
    let mean, median, mode;
    mean = input.reduce((a, b) => a + b) / input.length;
    mean = Math.round(mean * 10) / 10;
    let sorted = input.sort((a, b) => a - b);
    if (input.length % 2 != 0) median = input[Math.floor(input.length / 2)];
    else median = (input[input.length / 2] + input[input.length / 2 - 1]) / 2;
    median = Math.round(median * 10) / 10;
    let counter = 1, o = {};
    for (let i = 0; i < sorted.length - 1; i++) {
        while (sorted[i] == sorted[i + 1]) {
            counter++;
            i++;
        }
        
        o[sorted[i]] = counter;
        //arr.push(counter);
        //dynamic array
        //rotate
        //repeated string
        counter = 1;
    }
    let arr = [];
    for (let prop in o) {
        arr.push(o[prop]);
    }
    let max = Math.max(...arr);
    for (let prop in o) {
        if (o[prop] == max) {
            mode = prop;
            break;
        }
    }
    console.log(mean);
    console.log(median);
    console.log(mode);
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