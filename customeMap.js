Array.prototype.myMap=function(callback){
    let res=[];

for(let i=0;i<this.length;i++){
    let val=this[i];
    let rv=callback(val,i,this);
    res.push(rv);
}
return res;
}
let arr=["Akash Mahadev Tidke","Rahul Pawar","Akash Rathore"];

let ans=arr.myMap(function(v,i,orr){
    //console.log(v+" "+i+" "+" "+orr);
    let stringv=v.split(" ");
//    console.log(stringv);
let fans="";
let firstch;
for(let i=0;i<stringv.length;i++){
firstch=stringv[i];
fans+=firstch[0]+".";
 }
    return fans;
  
});
console.log(ans);