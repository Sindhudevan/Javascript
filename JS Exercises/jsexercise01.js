var start = 0;
function increment() {
    start = start + 1;
    document.getElementById("resultarea").innerHTML = start;
}
function reset() {
    start = 0;
    document.getElementById("resultarea").innerHTML = start;
}
function decrement() {
    if (start <= 0){
        start = 0;
    }
    else {
        start = start - 1;
        document.getElementById("resultarea").innerHTML = start;
    }
  
}
