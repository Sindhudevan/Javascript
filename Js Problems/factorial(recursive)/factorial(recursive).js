
// The Program prints factorial of given number 
function factorial(n) {
    if (n === 1) {
        return n;
    } else {
       return (n * factorial(n - 1));  //Here the value is returned to function caller() where x is...
    }
}
// This Function calls the previous function

function caller() {
    var x = document.getElementById("demo").value;
    document.getElementById("demo01").innerHTML= factorial(parseInt(x)); 
}

// This Function clearfield() clears the input on focus

function clearfield(){
    if(document.getElementById("demo").value>0){
        document.getElementById("demo01").innerHTML="";
    }
}