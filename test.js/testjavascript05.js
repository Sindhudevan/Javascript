
function profession(){
    var name = document.getElementById("enter01").value;
     var result = name.split("+");
     console.log(result)
     let sum=0;
     for(let i=0;i<result.length;i++){
         sum+=parseInt(result[i])
     }
    document.getElementById("enter02").value=(sum) ;


    // switch(name){
    //     case "teacher":
    //     document.getElementById("enter02").value="Welcome to school";
    //     break;
    //     case "Analyst":
    //     console.log("Welcome to office");
    //     break;
    //     case "developer":
    //     console.log("Welcome to software field ");
    //     break;
    //     case "Gamer":
    //     console.log("Welcome to PUBG");
    //     break;
    //     default :
    //     console.log("Welcome VIP");

        
    // }
   

}