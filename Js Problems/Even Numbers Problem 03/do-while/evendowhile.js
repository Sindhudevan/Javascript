// initialized by Function()...
function counter(){
    var start= 1;
     var end=10;
     var iterate=start;
     document.getElementById("even-Dowhile").innerHTML="";
// This Program Prints Only even numbers from the Sequences 1 to 1o using Do/while loop// 
     do{
        if(iterate%2==0){
         document.getElementById("even-Dowhile").innerHTML+=iterate+"<br/>";
        }
        iterate++;
    }while(iterate<=end);
}
// The End//