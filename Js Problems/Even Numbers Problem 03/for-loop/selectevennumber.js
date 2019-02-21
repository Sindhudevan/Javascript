//This Program Prints Sequence 1 to 10/

function counter(){
    var start =1;
    var end = 10;
    document.getElementById("even").innerHTML="";

// This Program Prints Only even numbers from sequence 1 to 10 using for loop//  

for(iterate=start; iterate<=end;iterate++){
    if(iterate%2==0){
    document.getElementById("even").innerHTML+=iterate +"<br>";
    }
}
}
// The End