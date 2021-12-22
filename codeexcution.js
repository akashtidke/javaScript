// console.log("before declar",a);

var a;
// console.log("after declear",a);
a=10;
// console.log("after intilize",a);

function fn(){
    console.log("before declar",a);
var a;
console.log("after declear",a);
a=20;
console.log("after intilize",a);
}
fn();