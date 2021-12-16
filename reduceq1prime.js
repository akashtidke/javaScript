let arr=[51,23,37,44,73,82,97,45];

let newarr=arr.reduce(function(pv,cv,i,oarr){
    let prime=true;
    console.log(pv+" "+cv+" "+i);
    for(let i=2;(i*i)<=cv;i++){
        if(cv%i==0)
        {
            prime=false;
           break;
        }else{
           prime= true;
        }
    }
    if(prime==true)
    return pv+1;
    else
    return pv;
},0)
console.log(newarr)