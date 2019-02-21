//This Program Prints only Odd Numbers From the Sequence 1 to 10//

function counter(){
    var start =1;
    var end = 10;

    //Here the Program Prints only Odd numbers from Sequence of Numbers 1 to 10 using for loop //  

for(iterate=start; iterate<=end;iterate++){
    if(iterate%2==1){
    document.getElementById("odd").innerHTML+="The odd number is "+iterate +"<br>";
    }
}
}
// The End//