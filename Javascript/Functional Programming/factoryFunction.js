// factory function produces object 

function createCircle (radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    }
}

//constructor function is to create an object  
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(1)