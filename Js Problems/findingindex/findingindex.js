var test = [21,23,34,56,67,58,45,77,30,60];

function Operation(){
    var userinput = document.getElementById("valueinput").value;
    var convertion =parseInt(userinput);
    for(iterate=0; iterate<test.length; iterate++){
        if(userinput==test[iterate]){
             console.log(iterate);
             console.log(test[iterate]);
        }

    }
}