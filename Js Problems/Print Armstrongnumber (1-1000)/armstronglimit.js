function findarmstrong() {
    
    let convert = 0;
    
for(j=0; j<=10000; j++){
    let userinput = j.toString();
    let separate = userinput.split("");

        convert=0;
    for (i = 0; i < separate.length; i++) {
        convert += Math.pow(separate[i], 3);
    }
    if(convert==j){
        console.log(convert);
        console.log("This Is a Armstrong Numbers");
    }
}
}