// the Program prints sequence of number 1 to 10//

function counter(){
    var start =1;
    var end = 10;
    var iterate=start; 

//It clears previous sequence// 

   document.getElementById("add-Dowhile").innerHTML="";

// here the Program Prints Sequence of Numbers 1 to 10 using do/while loop//
do{
    document.getElementById("add-Dowhile").innerHTML+=iterate+"<br/>";
    iterate++;
   }while (iterate<=end);
}
