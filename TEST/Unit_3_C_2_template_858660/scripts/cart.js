var cart=JSON.parse(localStorage.getItem("items")) || []
console.log(cart)

var product=document.getElementById("cart")



function append(cart){
    product.innerHTML=null;
    cart.map(function(el,index){
        let div= document.createElement('div')
        div.setAttribute("id","border")

        let img=document.createElement("img")
        img.src=el.image;

        let name= document.createElement("h2")
        name.innerText=el.name;

        let price= document.createElement("h2")
        price.innerText=el.price;

        let button= document.createElement("button")
        button.innerText="remove"
        button.addEventListener("click",function(){
            demove(el)
        })

        div.append(img,name,price,button)
        product.append(div)

        function demove(el){
         cart.splice(index,1)
         append(cart)
          console.log(cart)
          localStorage.setItem("items",JSON.stringify(cart));
        }

     var total=cart.reduce(function(acc,el){
          return acc +el.price;
      },0);

      document.getElementById("cart_total").innerText=total

    })

}

append(cart)

var check=document.getElementById("checkout")
check.addEventListener("click",checkout)

function checkout(){
    window.location.href="checkout.html"
}