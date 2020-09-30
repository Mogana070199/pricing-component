const Button=document.getElementById("selector-bar");
Button.addEventListener("click",myFunction);

function myFunction(){
    var monthpay=document.getElementsByTagName("h3");
    var annualpay=document.getElementsByTagName("h4");
    var i;var n;

    for(i=0;i<monthpay.length;i++){
        for(n=0;n < annualpay.length;n++){

            if(monthpay[i].style.display==="none"){
                monthpay[i].style.display="block";
                annualpay[i].style.display="none";
                Button.style.justifyContent="flex-end"
            }
            else{
                monthpay[i].style.display="none";
                annualpay[i].style.display="block";
                Button.style.justifyContent="flex-start"
            }
        }
    }
}   