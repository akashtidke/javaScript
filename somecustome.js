Array.prototype.mySome=function(cb){

    for(let i=0;i<this.length;i++){
        let v=this[i];
        let ans=cb(v,i,this);
        if(ans==true){
 return true;
 break;
}
            }
    return false;
       }
 
       let arr=[
    {name:"A" , age: 20,gender:"M"},
    {name: "B", age: 18, gender: "F"},
    {name: "C", age: 2, gender: "F"},
    {name: "D", age: 44, gender: "M"},
    {name: "E", age: 48, gender:"F"},
];
let ans3=arr.mySome(function(v){
    if(v.gender=="F"&&v.age>=20&&v.age<=30){
        return true;
    }else{
        return false;
    }
})
console.log(ans3);