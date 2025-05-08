
function change(num, delta){
    for (let i in num){
        num[i] = num[i] + delta;
    }
}

a = [10,20,30];
console.log(a);
change(a, 10);
console.log(a);