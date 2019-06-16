function expec(lam) {
    return (lam + lam ** 2);
}

function processData(input) {
    //Enter your code here
    let [aPos, bPos] = input.split(' ');
    aPos = +aPos;
    bPos = +bPos;

    console.log((160 + 40 * expec(aPos)).toFixed(3));
    console.log((128 + 40 * expec(bPos)).toFixed(3));
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