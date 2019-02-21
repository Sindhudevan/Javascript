//This Program Prints only Odd Numbers From the Sequence 1 to 10//

function counter() {
    var start = 1;
    var end = 10;
    var iterate = start;
    document.getElementById("odd-Dowhile").innerHTML = "";

    //This Program Prints only odd Numbers from the sequence 1 to 10// 

    do {
        if (iterate % 2 !== 0) {
            document.getElementById("odd-Dowhile").innerHTML += iterate + "<br/>";
        }
        iterate++;
    } while (iterate <= end);
}
//The End//
