let name = "ABCD";
let separate;
function displayoriginal() {
    document.getElementById("display").innerHTML = name;
}
function displayreverse() {
   let result="";
        for (i =name.length-1 ; i >=0 ; i--) {

            result += name[i];
        }
       document.getElementById("demo").innerHTML=result;
    }
