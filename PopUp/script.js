const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const button = document.querySelector("#btn"),
    close = document.querySelector(".close");

button.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.style.display = "block"
})

close.addEventListener("click", (e)=>{
    modal.style.display = "none";

})

modal.addEventListener("click", ()=>{
    modalContent.classList.add("slide-up");
    setTimeout(()=>{
        modal.style.display = "none";
        modalContent.classList.remove("slide-up");
    }, 500)
    
})