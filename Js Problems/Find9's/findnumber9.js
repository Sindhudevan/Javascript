// This function counter finds number 9's from sequence 1 to 100 
function counter() {
    let start = 0;
    let end = 1000;
    let n = 0;
    // This Program Will Print Numbers Of 9's In sequence 1 to 100 Using For-loop
    // iterate starts from value 0...
    document.getElementById("demo").innerHTML = "";

    for (iterate = start; iterate <= end; iterate++) {
        let sequence = ((iterate.toString()).split(""));   //"j" calculates 9's in sequence after Spliting as Strings....
        for (j = 0; j < sequence.length; j++) {
            if (sequence[j] == "9") {
                n++;
                // "n" counts the Number of 9's...
                document.getElementById("demo").innerHTML += iterate + "<br/>";
                // document.getElementById("demo").innerHTML+=n"<br/>";

            }
        }
    }

    document.getElementById("demo").innerHTML += " number of 9's is " + n;

}
