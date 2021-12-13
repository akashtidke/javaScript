let arr=[
    {name:"A" , age: 14 ,gender:"M"},
    {name: "B", age: 32, gender: "F"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "M"},
    {name: "E", age: 28, gender:"F"},
];
let ans=arr.filter(function(v,i,orr){
    if(v.gender=="F"){
        return true;
    }else{
        return false;
    }
}).map(function(v,i,orr){
    
    let nans=v.age;
    return nans;
})
console.log(ans);