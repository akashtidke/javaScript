// function outer(first){
//     console.log("Inside outer");
//     return function inner(second){
// console.log("inside inner")
// return first*second;
// }
// }
// let val=outer(2);

// let ans=val(4);
// console.log(ans);
function sayHello(name) {
    console.log("hello world " +  name);
}

console.log("with , \n",sayHello);
console.log("without , \n " + sayHello);