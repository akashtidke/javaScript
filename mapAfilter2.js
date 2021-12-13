let arr=[5,83,24,67,71,12,24,7];

let ans=arr.filter(function(v){
    if(v*v*v<=10000){
        return true;
    }else{
        return false;
    }
}).map(function(v){
    return v*v*v;
})
console.log(ans);
