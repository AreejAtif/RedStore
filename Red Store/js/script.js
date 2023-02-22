var Menuitems = document.getElementById("Menuitems");
// product
var ProductImg = document.getElementById("ProductImg");
var smallImg = document.getElementsByClassName("small-img");
// registration
var loginForm = document.getElementById("loginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

Menuitems.style.maxHeight="0px";
function menutoggle(){
    if(Menuitems.style.maxHeight =="0px"){
        Menuitems.style.maxHeight ="200px"
    }else{
        Menuitems.style.maxHeight ="0px"
    }
}



smallImg[0].onclick = function() 
{
    ProductImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() 
{
    ProductImg.src = smallImg[1].src;
}
smallImg[2].onclick = function()
{
    ProductImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() 
{
    ProductImg.src = smallImg[3].src;
}


function register() {
    RegForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}
function login() {
    RegForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}