//store the products array in localstorage as "data"
var form= document.getElementById("product_form");

form.addEventListener("submit",storeproduct)
  var arr= JSON.parse(localStorage.getItem("data")) || []
function storeproduct(event){
   event.preventDefault()
   var name=document.getElementById("product_name").value;
   var price= document.getElementById("product_price").value;
   var image= document.getElementById("product_image").value;
   var brand= document.getElementById("product_brand").value;
     
   var product={
       name:name,
       price:price,
       image:image,
       brand:brand,
   }
   arr.push(product)
   console.log(arr)

   localStorage.setItem("data",JSON.stringify(arr))

}

document.querySelector("#show_products").addEventListener("click",function(){
    window.location.href="./inventory.html"
})
