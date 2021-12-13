let products=[
    {name:"T-Shirt",price:25},
    {name :"Headphone",price:125},
    {name:"Keyboard",price:754}
];
let ans=products.filter(function(v,i,orr){
    if(v.price>=100){
        return true;
    }else{
        return false;
    }
}).map(function(v,i,orr){
     let ans2=v.name;
return ans2.toUpperCase();
})

console.log(ans);