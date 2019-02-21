let hrs = "00";
let mins ="00";
let secs = "00";
let millisecs="00";
var stop;
function play(){
        document.getElementById("maintimer").innerHTML= hrs + ":" + mins + ":" + secs + ":" + millisecs;
        document.getElementById("min-Displaytimer").innerHTML=mins;

        millisecs++;
        if(millisecs == 100){
            millisecs = "00";
            secs++;
        }
         if(secs == 60){
            secs = "0";
            mins++;
        }
        if(mins == 60){
            mins="0";
            hrs++;
        }if(hrs==24){
            hrs="00";

        }
    }   
    function startTimer(){
        stop = setInterval(play,10);
        document.getElementById("start").style.display= "none";
        document.getElementById("stop").style.display= "block";
    }
    function pauseTimer(){
        document.getElementById("start").style.display= "block";
        document.getElementById("stop").style.display= "none";
        clearInterval(stop);
    }
    function resetTimer(){
        hrs="00";
        mins="00";
        millisecs="00";
        secs="00";
        clearInterval(stop);
        document.getElementById("maintimer").innerHTML= hrs + ":" + mins + ":" + secs + ":" + millisecs;
        document.getElementById("min-Displaytimer").innerHTML=mins;
    }
