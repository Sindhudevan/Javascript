var a = [60,78,95,98,56,4,6,9,1,2];
var result ;
function initialArr() {
    document.getElementById("demo").innerHTML = a;
}
function resultArr() {

    for (i = 0; i < a.length; i++) {
        
        for (j = 0; j < a.length; j++) {
           
            if (a[j] > a[j + 1]) {
                result = a[j];
                a[j] = a[j + 1];
                a[j + 1] = result;
            }
        }

    }
    console.log(a)
}

