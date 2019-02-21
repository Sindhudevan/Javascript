var  def;

function fabseries(n){
    
   return n*(n+1);
}
  
function result(){
    let x = parseInt(document.getElementById("dem").value);
    def = fabseries(x);
    console.log(def);
}
