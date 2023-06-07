const rand = Math.floor(Math.random()*10+1)
const count = document.querySelector(".count")
const gen = document.querySelector(".generate")

gen.addEventListener("click", ()=>{
    count.innerHTML = Math.floor(Math.random()*10+1);
})