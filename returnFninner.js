function outer(){
    console.log("hello");
    return function inner(){
        console.log("inner");
    }
}
let val=outer();
console.log(val);
val();