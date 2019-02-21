// This Program is initialized by Function()//
function counter(){
    var start=1;
    var end =10;
    var iterate=start;
    document.getElementById("evenwhile").innerHTML="";
// This program Prints only even numbers from sequence 1 to 10 using while loop//
    while(iterate<=end){
        if(iterate%2==0){
           document.getElementById("evenwhile").innerHTML+=iterate+"<br/>";
        }
        iterate++;
    }
}
// The End//