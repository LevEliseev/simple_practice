document.getElementById('btn5').onclick = function() {
    const htmlColl = document.getElementsByClassName('rotate');
    let ar = [];
    for (let node of htmlColl) {
        ar.push(node.innerHTML);
    }

    for (let i = 0; i < htmlColl.length; i++) {
        switch(i) {
            case 0:
                htmlColl[i].innerHTML = ar[3];
                break;
            case 1:
            case 2:
                htmlColl[i].innerHTML = ar[i - 1];
                break;
            case 3:
                htmlColl[i].innerHTML = ar[5];
                break;
            case 4:
                htmlColl[i].innerHTML = ar[2];
                break;
            case 5:
            case 6:
                htmlColl[i].innerHTML = ar[i + 1];
                break;
            case 7:
                htmlColl[i].innerHTML = ar[4];
                break;
        }
    }
}