let str="My name is Sumeet Malik. I am a softwaer dev. i belive in learning by doing. I need caurage and patient.";
let str1=str.split(".");
let ans=str1.filter(function(v,i,arr){
    if(v.length>0){
        return v.split(" ");
    }
})
let ans2=ans.map(v=>v.trim());


let ans3=ans2.map(v=>v.split(" "));


let ans4=ans3.map(v=>v.reverse());



let ans5=ans4.map(v=>v.join(" "));
let ans6=ans5.map(v=>v+".")
let ans7=ans6.reduce(function(pv,cv){
    return pv+" "+cv;
})
console.log(ans7);