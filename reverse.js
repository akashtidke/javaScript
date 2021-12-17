let a1=["hello","bello","by","there","pep","nados"];
let a2=[20,54,12,33,98,76,100,11,291,34];
let ans=a1.sort().reverse();
console.log(ans);


let ans2=a2.sort(function(a,b){
    return a-b;
}).reverse();

console.log(ans2);
