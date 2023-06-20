const links = document.querySelectorAll(".nav-list li a");

const smoothScroll = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    })
}

for (let link of links){
    link.addEventListener("click", smoothScroll);
}

window.addEventListener("scroll", ()=>{
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY>0);
})

//Active menu switcher
const navList = document.querySelector(".nav-list");
navList.addEventListener("click", (e)=>{
    if (e.target.parentElement.classList.contains("link")){
    	navList.querySelector(".active").classList.remove("active");
        e.target.parentElement.classList.add("active");
    }
})

//Scroll to top
// window.addEventListener("scroll", ()=>{
//     const btn = document.querySelector(".top");
//     btn.classList.toggle("show-btn", window.scrollY>0);
//     // console.log(btn.classList);
//     // btn.classList.add("show-btn");
// })

const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", ()=>{
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
    if (rootEl.scrollTop/scrollTotal > .3){
        scrollBtn.classList.add("show-btn");
    } else{
        scrollBtn.classList.remove("show-btn");
    }
})

scrollBtn.addEventListener("click", ()=>{
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})