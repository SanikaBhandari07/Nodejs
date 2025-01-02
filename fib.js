
var a = 0;
var b = 1;
var n = 10;

console.log(a);
console.log(b);
for(let i=2; i<5; i++){
    debugger;
    var c = a + b;
    a = b;
    b = c;
    console.log(c);
}