function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let [sampleSize, mean, stdDeviation, distrPercentage, z] = input;
    
    let sd_sample = stdDeviation / Math.sqrt(sampleSize);
    console.log((+mean - sd_sample * z).toFixed(2));
    console.log((+mean + sd_sample * z).toFixed(2));
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
