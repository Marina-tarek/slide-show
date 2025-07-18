i=0;
var arr=["images/1.jpg","images/2.jpg","images/3.jpg", "images/4.avif"]


var content=document.createElement("img")
document.querySelector(".main").appendChild(content)
content.src=`${arr[i]}`

var image=document.querySelector("img")

function nextImg(){
i++
if(i>=arr.length){
    i=0
}
image.src=arr[i]
}

function prevImg(){
i--
if(i<0){
    i=arr.length-1
}
image.src=arr[i]
}
var t;
function show(){
       clearInterval(t)
    t=setInterval(nextImg,1000)
    console.log(t);
    
}

function stop(){
   clearInterval(t)
}