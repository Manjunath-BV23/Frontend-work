var arr = ["apple", "windows", "ubuntu", "cola", "system"];

var res = arr.filter(checkFirstAndLast);

function checkFirstAndLast(elem){
    return elem[0] == "a" || elem[elem.length-1] == "a";
}

console.log(res)