function fn(){
    console.log("before",a);
    var a;
    console.log("after",a);
    a=10;
    console.log("intit",a);
    if(true){
        a=30;
        console.log("32",a);

    }
    console.log("mmm",a);
}
fn();