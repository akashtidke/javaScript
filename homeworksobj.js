let arr=[10,20,30,40];

let i=0;
while(i<arr.length){
  for(let j=i+1;j<=arr.length;j++){
      let ans=arr.slice(i,j);
      console.log(ans);
  }
  i++;
}
