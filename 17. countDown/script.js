const countTo = "21 Dec 2023";

const c = setInterval(()=>{
    const endDate = new Date (countTo);
    const currentDate = new Date();
    const totalSeconds = (endDate-currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;
    // console.log(days);

    const countDown = document.getElementById("countDown");
    countDown.textContent = `${days}Days ${format(hours)}Hrs : ${format(minutes)}Min : ${format(seconds)}sec`;

    if (totalSeconds<0)
    {
        clearInterval(c);
        countDown.textContent = "Happy Birthday";
    }
}, 1000)

function format(t){
    return t<10?`0${t}`: t;
}