function diamondstructure() {
    let a = 5;
    let b = 1;
    let f = 9;
    for (iterate = 1; iterate <= 5; iterate++) {
        b=1;
        for (j = 1; j >= a; j--) {
            document.getElementById("demo").innerHTML += "\xa0\xa0";
            console.log(j , a)
        }
        while(b<=((2*iterate)-1)){
            document.getElementById("demo").innerHTML += "*";
            b++;
        }
        a--;
        document.getElementById("demo").innerHTML += "</br>";
    }



}