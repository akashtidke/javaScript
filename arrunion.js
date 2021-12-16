let arr=[
    [10,20,30,40,50,60],
    [11,20,30,40,50,60],
    [10,21,30,40,50,60],
    [10,20,33,40,50,60],
    [10,20,30,41,50,60]
]

  let arrunion=arr.reduce(function(pv,cv,pi,ci,oarr){
    let arr=pv.concat(cv.filter(v=>!pv.includes(v)))
    return arr;
})
console.log(arrunion); 