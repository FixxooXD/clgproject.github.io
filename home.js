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
 
 clrBtn.addEventListener('click',function(){
   const numsArr = result.value.split("");
   let New =  numsArr.splice(numsArr.length - 1);
 document.getElementById("res").value = numsArr.join("");   

 });





 function home(){
        window.location.href = "./index.html";
        
 }

 function restrictAlphabets(e) {
  var x = e.which || e.keycode;
  if ((x >= 48 && x <= 57))
      return true;
  else
      return false;
}