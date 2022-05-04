const clrBtn = document.getElementById("del");
let result= document.getElementById("res");
console.log(result);


function number(input){
     document.getElementById("res").value+=input;
 } 

 function cal(){
     var output =  eval(document.getElementById("res").value);
    document.getElementById("res").value = output;
 }
 
 function clear(){
    document.getElementById('res').value = ''
 }

 function home(){
        window.location.href = "./index.html";
        
 }