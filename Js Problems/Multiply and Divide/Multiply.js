function  Operation(){
    var start = 0;
        end = 1000;
        for(iterate=start; iterate<=end; iterate++){
            if(iterate % 3 == 0){
                if(iterate % 5 == 0){
                document.getElementById("demo").innerHTML +=iterate + "<br/>";
                }

            }
               
        }
    }