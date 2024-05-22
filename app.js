let btn = document.querySelector("#btn")
let body = document.querySelector("body")

let mode = "light"
btn.addEventListener('click',()=>{
  if(mode=="light"){
    body.classList.add("dark")
    btn.innerHTML="light" 
    body.classList.remove("light")
    mode="dark"
  }
    
 else {
  mode="light"
  body.classList.add("light")
  btn.innerHTML="dark"
  body.classList.remove("dark")

}}
)







var text1=`Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus in ab dolore, ipsam perferendis expedita atque dolor velit voluptas placeat necessitatibus recusandae? Beatae maiores, impedit quisquam suscipit eius p
elit. Iste doloremque fuga officiis odit totam praesentium consequuntur molestiae blanditiis, ratione nulla laborum suscipit amet architecto porro ab delectus perspiciatis natus neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi totam corporis, qui, sit est omnis nostrum rem adipisci cumque tempora quidem? Id expedita iste est rerum nostrum, totam dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sint aliquam eius iusto non, debitis vel, dignissimos voluptatum assumenda eum natus, reprehenderit ipsa a orem ipsum dolor sit amet consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus in ab dolore, ipsam perferendis expedita atque dolor velit voluptas placeat necessitatibus recusandae? Beatae maiores, impedit quisquam suscipit eius p
elit. Iste doloremque fuga officiis odit totam praesentium consequuntur molestiae blanditiis, ratione nulla laborum suscipit amet architecto porro ab delectus perspiciatis natus neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi totam corporis, qui, sit est omnis nostrum rem adipisci cumque tempora quidem? Id expedita iste est rerum nostrum, totam dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sint aliquam eius iusto non, debitis vel, dignissimos voluptatum assumenda eum natus, reprehenderit ipsa a `
var text = document.getElementById("text")
var conver = text1.slice(0,300)
function saad(a){
  if(a){
    text.innerHTML=`${text1}<button id="btn1">See less</button>`
  }else{
    text.innerHTML=`${conver}<button id="btn2">See more</button>`

  }
}

saad(false)
text.addEventListener("click",(e)=>{
  if(e.target.id==="btn2"){
saad(true)
}else if(e.target.id==="btn1"){

saad(false)
}
}
)