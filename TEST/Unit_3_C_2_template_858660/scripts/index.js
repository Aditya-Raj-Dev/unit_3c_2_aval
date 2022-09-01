// Store cart items in local storage with key: "items"\
function cart(){
    window.location.href="cart.html"
}

url="https://grocery-masai.herokuapp.com/items"

fetch(url)
.then(function(res){
    return res.json()
}).then(function(res){
    
    console.log(res.data)
    append(res.data)
})
.catch(function(err){
    console.log(err)
})

var item=document.getElementById("items")
var arr= JSON.parse(localStorage.getItem("items")) || []




console.log(count)


function append(data){
    item.innerHTML=null;
    data.map(function(el,index){
        let div= document.createElement('div')
        div.setAttribute("id","border")

        let img=document.createElement("img")
        img.src=el.image;

        let name= document.createElement("h2")
        name.innerText=el.name;

        let price= document.createElement("h2")
        price.innerText=el.price;

        let button= document.createElement("button")
        button.innerText="Add To Cart"
        button.addEventListener("click",function(){
            addtocart(el)
        })

        div.append(img,name,price,button)
        item.append(div)


        function addtocart(el){
            arr.push(el)
            console.log(arr)
            var count=document.getElementById("count").innerText=arr.length;
            localStorage.setItem("items",JSON.stringify(arr))
            append(data)
        }


    })
}

