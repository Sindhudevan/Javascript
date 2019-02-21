var test = [21,23,34,56,67,58,45,77,30,60];
 

function Operation(){
    var userinput = document.getElementById("valueinput").value;
    var convertion =parseInt(userinput);
    var result = test.indexOf(convertion);
    if(result==-1){
        console.log("This Number Is Unavailable");
    }else{
        console.log(result);
        console.log(test[result]);
    }   
}