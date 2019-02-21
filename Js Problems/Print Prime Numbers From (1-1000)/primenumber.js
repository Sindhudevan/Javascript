function operation(){
    var start = 0;
    var end = 1000;
    total = [];
      
    for(iterate=start; iterate<=end; iterate++){
        var count = 0;
       for(num = start; num <= iterate; num++){
           if(iterate%num==0){
               count++;
           }   
       }
       if(count==2){
        total.push(iterate);
      }  
    }
    console.log(total);
}