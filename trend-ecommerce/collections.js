var products = document.querySelector(".new-arrival")
var inputBox= document.querySelector(".search")
var productList=products.querySelectorAll("div")
inputBox.addEventListener("keyup",function(){
var find=event.target.value.toUpperCase()
for(count=0;count<productList.length;count++){
    var name = productList[count].querySelector("p").textContent
    if(name.toUpperCase().indexOf(find)<0){
          productList[count].style.display="none"
    }
    else{
        productList[count].style.display="block"
    }
}})