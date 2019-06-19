function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let n = input[0], dictionary = {}, el;
    for (let i = 1; i <= n; i++) {
        el = input[i].split(' ');
        dictionary[el[0]] = +el[1];
    }
    for (let i = 1 + +n; i < input.length; i++) {
        (input[i] in dictionary) ? console.log(`${input[i]}=${dictionary[input[i]]}`) : console.log('Not found');
    }
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
