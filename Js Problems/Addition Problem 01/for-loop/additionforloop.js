
//Program is initialized by function//
function counter(){
var start =1;
var end = 10;
var iterate2;
var txt= "Say hi to sindhu",  txt1= "Say double hi to sindhu";
document.getElementById("addition").innerHTML="";

// This Program Prints Sequence of Numbers 1 to 10 by Using For Loop Nested with If statements//

for(let iterate=start; iterate<=end;iterate++){
   var iterate2 = iterate;
   document.getElementById("addition").innerHTML+=iterate+"<br/>"; 
}
if  (iterate2==10){
   document.getElementById("addition").innerHTML+=txt+"<br/>";
   document.getElementById("addition").innerHTML+=txt1+"<br/>";
}
}
// End//