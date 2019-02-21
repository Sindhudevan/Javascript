function diamondstructure() {
    let i = 1;
    let a = 1;
    let b = 3;
    let c = 3;
    let d = 3;
    document.getElementById("demo").innerHTML = " ";
    while (i <= 3) {
        let j = b;
        while (j >= 2) {
            document.getElementById("demo").innerHTML += "\xa0\xa0";
            j--;

        }
        let k = 1;
        while (k <= a) {
            document.getElementById("demo").innerHTML += "*";
            k++;
        }
        document.getElementById("demo").innerHTML += "</br>";
        i++;
        a += 2;
        b--;
    }
    let M = 1;
    while (M <= 2) {
        let j = c;
        while (j <= 3) {
            document.getElementById("demo").innerHTML += "\xa0\xa0";
            j++;
        }
        let k = 1;
        while (k <= d) {
            document.getElementById("demo").innerHTML += "*";
            k++;
        }
        document.getElementById("demo").innerHTML += "</br>";
        M++;
        d -= 2;
        c--;
    }


}




