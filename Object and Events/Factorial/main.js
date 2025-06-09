function calc(){
let number=document.getElementById("number");
let answer=document.getElementById("answer");
let val=parseInt(number.value);
answer.value=calculateFactorial(val);
}

function calculateFactorial(val){
    if(val== 0 || val == 1)
        return val;
    return val*calculateFactorial(val-1);    
}