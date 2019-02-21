let user;

function factorial() {
    let user = document.getElementById("userinput").value;
    let def = parseInt(user);
    for (i = user; i >= 2; i--) {
       user*= (i-1);   // user = user * (i-1)  starts from 5 and end in 1....(loop returns each value and Multiplies it another)
      
    }
    console.log(user) ;  
    }
   