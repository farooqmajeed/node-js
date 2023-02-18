function add(a) {
    return function (b) {
        return a + b;
    }
    
}

add(1);
add(1)(5); //add(a, 5))_

const result = a => b => a + b; //(a, b) => a + b;