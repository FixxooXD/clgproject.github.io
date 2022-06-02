const clearBtn = document.getElementById("allClear");
const ClrEntry = document.getElementById("ClrEntry");
const ansConsole = document.getElementById("output");
const BtnText = document.getElementById("btnText");


// AllClear btn
clearBtn.addEventListener('click', function(){
 document.getElementById("output").value = '';
});

// clearEntry Btn
ClrEntry.addEventListener('click',function(){
    const numsArr = ansConsole.value.split("");
    let New =  numsArr.splice(numsArr.length - 1);
    document.getElementById("output").value = numsArr.join(""); 
});

// Equalto Btn
function cal(){
    var output =  eval(document.getElementById("output").value);
   document.getElementById("output").value = output;
}

function sin() {
    ansConsole.value = Math.sin(ansConsole.value);
}

// to get the value from  the  keys onclick
function number(input){
    document.getElementById("output").value += input;
    // if (BtnText== '*') {
        // BtnText = 'x';
        // document.getElementById("output").value += BtnText;
    // }

}

