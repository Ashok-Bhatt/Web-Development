
function addSquares(a, b) {
    function square(x){
        return x*x;
    }
    return square(a) + square(b);
}

console.log(addSquares(10,20));