var nav=document.getElementById("sidenav")
var close=document.getElementById("sideclose")
var icon=document.getElementById("menuicon")

icon.addEventListener("click",function(){
    nav.style.right="0"
});

close.addEventListener("click",function(){
    nav.style.right="-50%"
})

//product search functionality
var search = document.getElementById("search")
var product = document.getElementById("products")
var list = product.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enterdvalue=event.target.value.toUpperCase()

    for(i=0;i<list.length;i++){
        listname=list[i].querySelector("h1").textContent
        if(listname.toUpperCase().indexOf(enterdvalue)<0){
            list[i].style.display="none"
        }

        else{
            list[i].style.display="block"
        }
    }
})
