
let arr=[
    [10,20,30,40,50,60],
    [11,20,30,40,50,60],
    [10,21,30,40,50,60],
    [10,20,33,40,50,60],
    [10,20,30,41,50,60]
]
let result=arr.reduce((pv,cv)=>{
    let temp=pv.filter(v=>cv.includes(v));
    return temp;
  })
  
  console.log(result)