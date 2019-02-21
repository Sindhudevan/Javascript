// This function counter finds number 9's from sequence 1 to 100 
function counter(){
    let start=0;
   let end=100;
   let n = 0;

     for(iterate = start; iterate < end; iterate++){
         let sequence = ((iterate.toString()).split(""));
         let answer = parseInt(sequence);
         console.log(answer);
         if(sequence.length > 1){
             for(j=0; j<sequence.length; j++){
                 n++;
                 console.log(iterate);
             }
         }
     }
    }
;