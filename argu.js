function fn(param1,param2){
    console.log("inside fn",param1,param2);
}
fn();
fn("hello","hi");
fn("hello");

function fn1(param1,param2){
    console.log(arguments)
}
fn1();
fn1("hello","hi");
fn1("hello");