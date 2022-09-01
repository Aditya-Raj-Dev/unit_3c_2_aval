var submit=document.getElementById("submit")
submit.addEventListener("click",checkout)

var name=document.getElementById("name").value
var num=document.getElementById("num").value
var add=document.getElementById("add").value

function checkout(){
    
    
        alert("Your order is accepted")

        setTimeout(function(){
            alert("Your order is being Packed ")
        },3000)
    
        setTimeout(function(){
            alert("Your order is in transit  ")
        },8000)
    
        setTimeout(function(){
            alert(" Your order is out for delivery ")
        },10000)
    
        setTimeout(function(){
            alert("Order delivered")
        },12000)
    
   
}