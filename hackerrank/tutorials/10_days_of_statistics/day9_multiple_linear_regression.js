function trans(arr) {
    let l = arr.length, m = arr[0].length, result = [];
    for (let i = 0; i < m; i++) {
        result.push(new Array(l));
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < l; j++) {
            result[i][j] = arr[j][i];
        }
    }
    return result;
}

function mult(arr1, arr2) {
    let m = arr1.length, n = arr1[0].length, result = [];

    if (typeof arr2 == 'number') {
        for (let i = 0; i < m; i++) {
            result.push(new Array(n));
            for (let j = 0; j < n; j++) {
                result[i][j] = arr1[i][j] * arr2;
            }
        }
        return result;
    }

    let xx = arr2[0].length;
    for (let i = 0; i < m; i++) {
        result.push(new Array(xx));
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < xx; j++) {
            result[i][j] = 0;
            for (let k = 0; k < n; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return result;
}

function det(arr) {
    if (arr.length == 2) {
        return arr[0][0] * arr[1][1] - arr[1][0] * arr[0][1];
    }
    if (arr.length == 3) {
        return arr[0][0] * arr[1][1] * arr[2][2] - arr[0][0] * arr[1][2] * arr[2][1] - arr[0][1] * arr[1][0] * arr[2][2] +
            arr[0][1] * arr[1][2] * arr[2][0] + arr[0][2] * arr[1][0] * arr[2][1] - arr[0][2] * arr[1][1] * arr[2][0];
    }
}

function added(arr) {
    let temp1, temp2, result = [], l = arr.length, m = arr[0].length;
    for (let i = 0; i < l; i++) {
        result.push(new Array(l));
    }

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < m; j++) {
            temp1 = [];
            for (let k = 0; k < l; k++) {
                temp2 = [];
                if (k == i) continue;
                for (let m = 0; m < l; m++) {
                    if (m == j) continue;
                    temp2.push(arr[k][m]);
                }
                temp1.push(temp2);
            }
            result[i][j] = det(temp1);
        }
    }
    result[0][1] *= -1;
    result[1][0] *= -1;
    result[1][2] *= -1;
    result[2][1] *= -1;
    return result;
}

function rever(arr) {
    return mult(trans(added(arr)), (1 / det(arr)));
}

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split(' ');
        for (let j = 0; j < input[i].length; j++) {
            input[i][j] = +input[i][j];
        }
    }

    const [m, n] = input[0];
    const [q] = input[1 + n];
    let xArray = [], yArray = [], qArray = [];

    for (let i = 0; i < n; i++) {
        yArray.push([]);
    }

    for (let i = 1; i <= n; i++) {
        xArray.push([1]);
        for (let j = 0; j < m; j++) {
            xArray[i - 1].push(input[i][j]);
        }
        yArray[i - 1].push(input[i][m]);
    }

    for (let i = n + 2; i < input.length; i++) {
        qArray.push(input[i]);
    }

    let first = mult(trans(xArray), xArray);
    let second = rever(first);
    let third = mult(second, trans(xArray));
    let fourth = mult(third, yArray);

    const a = +fourth[0][0].toFixed(2);
    const b1 = +fourth[1][0].toFixed(2);
    const b2 = +fourth[2][0].toFixed(2);
    
    for (let i = 0; i < q; i++) {
        console.log((a + b1 * qArray[i][0] + b2 * qArray[i][1] + 0.01).toFixed(2));
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
