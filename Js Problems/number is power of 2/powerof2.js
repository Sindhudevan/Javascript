function operation() {
    var userinput = document.getElementById("inputvalue").value;
    var finalvalue = parseInt(userinput);
    var powerfinder;

    for (n = 1; n <= finalvalue; n++) {
        powerfinder = Math.pow(2, n);
        if (powerfinder == finalvalue) {
            document.getElementById("demo").innerHTML = "Yes at "+ n;
            break;
        }
        else {
            document.getElementById("demo").innerHTML = "Kadale illayam"; 
        }
    }
   
}
function clearfield(){
    if(document.getElementById("inputvalue").value.length > 0){
        document.getElementById("demo").innerHTML ="";
    }
}

   

