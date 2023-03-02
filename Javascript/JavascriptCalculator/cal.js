

function btnClick(e) {
    document.getElementById("result").value += e;
}
function clr(){
    console.log("clr", document.getElementById("result").value);
    document.getElementById("result").value = ""
}

function solve(){
    let x = document.getElementById("result").value
    let y =eval(x);
    document.getElementById("result").value = y;
    console.log("solution",y)
}