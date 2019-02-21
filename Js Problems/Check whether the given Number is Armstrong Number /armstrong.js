function findarmstrong() {
    let userinput = document.getElementById("demo").value;
    let separate = userinput.split("");
    let convert = 0;
    

    for (i = 0; i < separate.length; i++) {
        convert += Math.pow(separate[i], 3);
    }
    console.log(convert);
    if(userinput==convert){
        console.log("This Is a Armstrong Numbers");
    }else{
        console.log("This Is Not a Armstrong Numbers");
    }
}