var x = [];

function addlist() {
    user = document.getElementById("input01").value
    x.push(user)
    user="";

}
function showlist() {
    for (i = 0; i < x.length; i++) {
        document.getElementById("demo1").innerHTML += x[i] + "<br>";
        
    }
}
