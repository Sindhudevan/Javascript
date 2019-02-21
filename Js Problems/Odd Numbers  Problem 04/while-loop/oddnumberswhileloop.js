//This Program Prints only Odd Numbers From the Sequence 1 to 10//

function counter(){
    var start=1;
    var end =10;
    var iterate=start;

//Here the Program Prints only Odd numbers from Sequence of Numbers 1 to 10 using While loop //  
          document.getElementById("oddwhile").innerHTML=+"";

    while(iterate<=end){
        if(iterate%2!==0){
          document.getElementById("oddwhile").innerHTML+=iterate+"<br/>";
        } 
        iterate++;
    }
}
// The End//