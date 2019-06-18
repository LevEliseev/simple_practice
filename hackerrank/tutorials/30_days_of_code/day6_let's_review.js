function oddEven(s) {
    let [odd, even] = ['', ''];
    for (let i = 0; i < s.length; i++) {
        i % 2 === 0 ? even += s[i] : odd += s[i];
    }
    return `${even} ${odd}`;
}

function processData(input) {
    //Enter your code here
    input = input.split('\n');

    for (let i = 1; i <= input[0]; i++) {
        console.log(oddEven(input[i]));
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
