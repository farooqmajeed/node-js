function f(a,b,c){
    m=["1", "2", "3"]
    a = 3;
    b[0] = "x";
    c.first = false;
}

var x =4;
var y =["A", "B", "C"];
var z ={ first:true};

f(x,y,z);
console.log(x,y,z);

(function() {
    console.log("1");
    setTimeout(() => {
        console.log("2");
    }, 1000);
    setTimeout(() => {
        console.log("3");
    }, 0);
    console.log("4");
})();