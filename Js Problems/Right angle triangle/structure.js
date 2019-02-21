function treestructure(){
    document.getElementById("demo").innerHTML = " ";

    for(i=1;i<=5;i++){
        for(j=1;j<=i;j++){
          document.getElementById("demo").innerHTML += "*";
        }
        document.getElementById("demo").innerHTML += "</br>";
    }
}