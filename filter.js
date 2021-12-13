let array=[2,3,4,5,6,7,8,9];
let ans=array.filter(function(v,i,oarr){
    if(v%2==0){
        return false;
    }else{
        return true;
    }
});
console.log(ans);