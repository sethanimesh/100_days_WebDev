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

