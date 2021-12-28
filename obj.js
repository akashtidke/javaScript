let obj={
    fun1:function(f1,f2){
        console.log("This person is called "+this.name);
console.log(arguments);
    },
    name:"akash",

}
// obj.fun1("rahul","pratap");
let o2={
    name:"ssssss"
}
// obj.fun1.call(o2,"rahul","p","sharma");
obj.fun1.apply(o2,["akash","rahul","preeti"]);
//