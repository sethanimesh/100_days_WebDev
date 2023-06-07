const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");
// const add = document.querySelector(".add");
// const reset = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");

buttons.addEventListener("click", (e)=>{
    if (e.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor();
    }
})

function setColor(){
    if (count.innerHTML>0){
        count.style.color = "yellow";
    }
    else if (count.innerHTML<0){
        count.style.color = "orangered";
    }
    else {
        count.style.color = "white";
    }
}

// add.addEventListener("click", ()=>{
//     count.innerHTML++;
// })

// reset.addEventListener("click", ()=>{
//     count.innerHTML = 0;
// })

// sub.addEventListener("click", ()=>{
//      count.innerHTML--;
// })