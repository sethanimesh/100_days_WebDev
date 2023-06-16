const time = 10; //time in minutes
let promoTime = time*60;

let counting = document.getElementById("countDown");

function startCountDown(){
    let promoTimer = setInterval(()=>{
        if (promoTime<=0)
        {
            clearInterval(promoTimer);
            counting.innerHTML = "Promo has ended";
        } else{
            promoTime--;
            const days = Math.floor(promoTime/3600/24);
            const hours = Math.floor(promoTime/3600)%24;
            const minutes = Math.floor(promoTime/60)%60;
            const seconds = Math.floor(promoTime%60);
            counting.innerHTML = `Time ${hours}Hrs : ${minutes}Min : ${seconds}sec`;
        }
    }, 1000)
}

startCountDown();