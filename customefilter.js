Array.prototype.myFilter=function(cb){
let oarr=this;
let ans=[];
for(let i=0;i<oarr.length;i++){
    let v=oarr[i];
    let bv=cb(v,i,oarr);
    if(bv==true){
ans.push(v);
    }
}
return ans;

}
let array=[2,3,4,5,6,7,8,9];
let ans=array.myFilter(function(v,i,oarr){
    if(v%2==0){
        return false;
    }else{
        return true;
    }
});
console.log(ans);