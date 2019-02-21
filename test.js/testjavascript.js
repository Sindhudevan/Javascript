
setInterval(clear, 100);
var inputvalue="";

function clear(){
    var newinputvalue = document.getElementById("getingvalue").value;
    if (newinputvalue != inputvalue) {
        inputvalue = newinputvalue;
        if(inputvalue > 40){
            document.getElementById("tooltip2").style.display= "block";
            document.getElementById("tooltip1").style.display= "none";
        }
        else if(inputvalue ==""){
            document.getElementById("tooltip2").style.display= "none";
            document.getElementById("tooltip1").style.display= "none";
        }
        else{
            document.getElementById("tooltip1").style.display= "block";
            document.getElementById("tooltip2").style.display= "none";
    
        }}
       

}
