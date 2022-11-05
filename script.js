let btn=document.querySelector("button")
console.log(btn)
btn.addEventListener('click',(e)=>{
    let x=document.getElementById("texta")
    let a=x.value;
    a=a.toString();
    let arr=["hi","hello","bye","byee","see you","thanks","good to see","random","getdone"];
    let pt=document.querySelector(".answer");
    if(a.length!=0){
        let temp=Math.round(Math.random()*9);
        
        pt.innerText=arr[temp].toString();

    }
    else{
        pt.innerText="Please enter your question here";


    }
    
});