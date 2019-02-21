function printdiamond() {
    // let limit = document.getElementById("userinput").value;
    let diamond = document.getElementById("demo");
    diamond.innerHTML = "";
  let limit = 10;
    for (i = 1; i <=limit; i++) {
        for (j=limit-1;j>=i;j--) {
            diamond.innerHTML += "\xa0\xa0";
            // console.log(j)
        }
        for (k = 1; k <= i; k++) {
            if(k==10){
                diamond.innerHTML += 0;
            }else{
                diamond.innerHTML += k;
            }
        }
        for(l=i-1;l>=1;l--){
            diamond.innerHTML += l;
        }
        diamond.innerHTML += "</br>";
    }
    
}