
function fabinacciseries(){
    let counter= [];

    let user = document.getElementById("userinput").value;
    counter[0] = 0;
    counter[1] = 1;
    for (i = 2; i <= user; i++) {
      //  fibonacci number = previous + one before previous
      counter[i] = counter[i - 2] + counter[i - 1];
      console.log(counter[i]);
    }
}