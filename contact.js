var nav=document.getElementById("sidenav")
var close=document.getElementById("sideclose")
var icon=document.getElementById("menuicon")

icon.addEventListener("click",function(){
    nav.style.right="0"
});

close.addEventListener("click",function(){
    nav.style.right="-50%"
})