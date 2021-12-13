let arr=[
    {name:"A" , age: 20,gender:"M"},
    {name: "B", age: 18, gender: "F"},
    {name: "C", age: 2, gender: "F"},
    {name: "D", age: 44, gender: "M"},
    {name: "E", age: 48, gender:"F"},
];
let ans=arr.filter(function(v){
    if(v.gender=="F"){
        return true;
    }else{
        return false;
    }
}).map(function(v){
    return v.name+" "+v.age;
})
console.log(ans);