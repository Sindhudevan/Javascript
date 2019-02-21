
function counterstart(){
var x = document.getElementById("xplace").value;
    y =  document.getElementById("yplace").value;
   document.getElementById("demo").innerHTML = counter(x,y);
}
function counter(x,y){
let output=Math.pow(x,y)
console.log(output)
 return output

}
function pop(x){
    let output=Math.sqrt(x);
    console.log(output)
    return output
}
