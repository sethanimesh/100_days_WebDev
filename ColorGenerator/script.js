const generate = document.querySelector(".color");
const count = document.querySelector(".count")

generate.addEventListener("click", ()=>{
    const rand = Math.random().toString(16).substring(2,8);
    count.innerHTML = rand;
    document.body.style.backgroundColor = "#"+rand;
})