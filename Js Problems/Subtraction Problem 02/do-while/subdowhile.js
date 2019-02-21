// Program is initialized by Function//
function counter(){
    var start =1;
    var end = 10;
    var iterate=end; 

   document.getElementById("sub-Dowhile").innerHTML="";
   //This program Prints Sequence of numbers 10 to 1 using do / While Loop//
do{
    document.getElementById("sub-Dowhile").innerHTML+=iterate+"<br/>";
    iterate--;
   }while (iterate>=start);
}
// The End//