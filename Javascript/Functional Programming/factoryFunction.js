// factory function produces object 

function createCircle (radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    }
}