var NumberArr = [1];
let min;
let max;

function pushItemsInArr() {
  let number = document.getElementById("number").value;
  if (number) {
    NumberArr.push(number);
    console.log(NumberArr);
  }
}

function smallNumber(){
     min = Math.min.apply(Math, NumberArr);
     document.getElementById("minNumber").innerHTML = String(min);
    
}
function largerNumber(){
    max = Math.max.apply(Math, NumberArr);
    document.getElementById("maxNumber").innerHTML = String(max);
   
}