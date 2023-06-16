const btn = document.querySelector(".btn")
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

const hideError = () => {
    setTimeout(()=>{
        error.style.display = "none";
    }, 5000)
}

btn.addEventListener("click", ()=>{
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;
    
    
    if (bill==="" || rate==""){
        // console.log("please add a number")
        error.style.display = "block";
        hideError();
    } else if (isNaN(bill)){
        error.innerHTML = "Please enter a number";
        error.style.display = "block";
        hideError();
    } else {
        let tipValue = Math.ceil(bill*rate);
        let totalValue = tipValue + Number(bill);

        tip.textContent = `Tip: $${tipValue}`;
        total.textContent = `Total: $${totalValue}`;
        
    }

    
})
