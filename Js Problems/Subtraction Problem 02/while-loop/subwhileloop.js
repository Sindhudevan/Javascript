//  //This Program Prints Sequence of Numbers from 10 to 1//

  function counter(){
    var start= 1;
    var end=10;
    var iterate=end;
    document.getElementById("subwhile").innerHTML="";

//Here the Program prints Sequence of numbers from 10 to 1 using while loop//  

  while(iterate>=start){
      document.getElementById("subwhile").innerHTML+=iterate+"<br/>";
      iterate--;
  }
}
//The End//