let products=[
    {name:"T-Shirt",price:25},
    {name :"Headphone",price:125},
    {name:"Keyboard",price:754}
];
let arr1=[];
let arr2=[];
let arr3=[];
let ans=products.filter(function(v){
    if(v.price>=100){
        arr1.push(v.name.toUpperCase())
        
        return true;
    }else{
        arr2.push(v.name.toLowerCase());
        return false;
    }
})
console.log(arr1);
console.log(arr2);