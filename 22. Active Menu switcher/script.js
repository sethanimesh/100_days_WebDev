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