function operation(){
   var start = 10;
   var end = 1000;
 
   for(iterate=start; iterate<=end; iterate++){   
    var palindrome = iterate.toString().split("").reverse().join("");
       if(iterate==palindrome){
           console.log(iterate)
       }
   }
}
