const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor(){
    bgColor.classList.add("online");
}

async function connectionStatus(){
    try{
        const fetchResult = await fetch('https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@1.5x.png?time=' + (new Date().getTime()));
        image.src = "./images/online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status<300;
    } catch (error) {
        console.log(error);
        statusDisplay.textContent = "OOPS!!! Your internet connection is down";
        image.src = "./images/offline.png";
        bgColor.classList.remove("online");
    }
}

//Monitor the Connection
setInterval(async ()=>{
    const result = await connectionStatus();
    if (result) {
        statusDisplay.textContent = "You are ONLINE, CONNECTION LOOKS GOOD";
    }
    setColor();
}, 5000);

//Check connection when the page loads
window.addEventListener("load", async (event)=>{
    if (connectionStatus()){
        statusDisplay.textContent = "You are ONLINE";
    }
    else{
        statusDisplay.textContent = "You are OFFLINE";
    }
})