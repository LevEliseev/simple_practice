let result = '', firstOper, secondOper, action;
const parseOpers = new RegExp(/\d{1,}/gi), parseAction = new RegExp(/[+-\/*]/gi);
function update() {
    document.getElementById('res').innerHTML = result;
}

function getAction(attr) {
    switch(attr) {
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            result += attr;
            break;
        case 'C':
            result = '';
            break;
        case '=':
            [firstOper, secondOper] = result.match(parseOpers);
            firstOper = Number.parseInt(firstOper, 2);
            secondOper = Number.parseInt(secondOper, 2);
            action = result.match(parseAction);
            if (action == '+') result = (firstOper + secondOper).toString(2);
            if (action == '-') result = (firstOper - secondOper).toString(2);
            if (action == '*') result = (firstOper * secondOper).toString(2);
            if (action == '/') result = (firstOper / secondOper).toString(2);
            break;
    }
}

const coll = document.getElementsByTagName('button');
for (let i = 0; i < coll.length; i++) {
    coll[i].onclick = function() {
        getAction(this.innerHTML);
        update();
    }
}