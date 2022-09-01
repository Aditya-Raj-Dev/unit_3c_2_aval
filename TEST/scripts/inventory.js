var product= JSON.parse(localStorage.getItem("data"))

product.map(function(elem,index){
    var pdata=document.getElementById("products_data")

    var div=document.createElement("div")

    var name=document.createElement("h2")
    name.innerText=elem.name

    var brand=document.createElement("h2")
    brand.innerText=elem.brand

    var price=document.createElement("h2")
    price.innerText=elem.price

    var image=document.createElement("img")
    image.src=elem.image

    var  button=document.createElement("button")
    button.innerText="REMOVE";
    button.addEventListener("click",function(){
        remove(index)
    })

    div.append(image,name,brand,price,button)

    pdata.append(div)

    function remove(index){
        console.log("hhh")
       div.innerHTML="";
       product.splice(index,1)
       localStorage.setItem("data",JSON.stringify(product))
    }
})

document.getElementById("add_product").addEventListener("click",showme)

function showme(){
    window.location.href="./index.html"
}