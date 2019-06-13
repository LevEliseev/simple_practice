function processData(input) {
    //Enter your code here
    //input
    let ind = input.indexOf('\n');
    input = input.substring(ind);
    input = input.split(' ');
    for (let i = 0; i < input.length; i++) input[i] = +input[i];
    //solution
    let mean, median, mode;
    //mean
    mean = (input.reduce((a, b) => a + b) / input.length).toFixed(1);
    //median
    let sorted = input.sort((a, b) => a - b);
    if (input.length % 2 != 0) median = (input[Math.floor(input.length / 2)]).toFixed(1);
    else median = ((input[input.length / 2] + input[input.length / 2 - 1]) / 2).toFixed(1);
    //mode
    let counter = 1, o = {}, max = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
        while (sorted[i] == sorted[i + 1]) {
            counter++;
            i++;
        }
        
        o[sorted[i]] = counter;
        if (counter > max) max = counter;
        counter = 1;
    }
    for (let prop in o) {
        if (o[prop] == max) {
            mode = prop;
            break;
        }
    }
    //output
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