Array.prototype.myReduce=function(cb,iv){
let arr=this;
let pv;
if(iv==undefined){
pv=arr[0];
for(let i=1;i<arr.length;i++){
    let cv=arr[i];
    pv=cb(pv,cv,i,arr);
}
}else{
    pv=iv;
for(let i=0;i<arr.length;i++){
let cv=arr[i];
pv=cb(pv,cv,i,arr);
}
}
return pv;


}
let arr=[10,20,30,40];
let sum=arr.myReduce(function(pv,cv){
    return pv+cv;
},5)
console.log(sum);