function trianglestructure() {
    let a = 1;
    let i = 1;
    let b = 4;
   while(i<=5){
     let j=b;
     while(j>=1){
          document.getElementById("demo").innerHTML += "\xa0\xa0" ;
         j--;
     }
     let k = 1;
     while(k<=a){
          document.getElementById("demo").innerHTML += "*" ;
          k++;
     }
     document.getElementById("demo").innerHTML += "</br>" ;
    i++;
    a+=2;
    b--;
   } 

 
}