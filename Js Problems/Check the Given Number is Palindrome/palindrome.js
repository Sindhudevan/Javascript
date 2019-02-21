
function operation(){
    var userinput = document.getElementById("userinput").value;

    var Palindrome = userinput.split("");
        checkpalindrome = Palindrome.reverse();
        qualifypalindrome = checkpalindrome.join("");
    if(userinput == qualifypalindrome){
        document.getElementById("demo").innerHTML+= "This Number Is Palindrome";
    }else{
        document.getElementById("demo").innerHTML+= "This Number Is Not a Palindrome";  
    }
}

function clearfield(){
    if(document.getElementById("userinput").value.length>0){
        document.getElementById("demo").innerHTML= "";  

    }
}