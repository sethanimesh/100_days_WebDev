const btn = document.getElementById("btn");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");
function getQuotes(e){
    e.preventDefault();

    if (number.value.length==0){
        return alert("Please enter a number");
    }
    else{

    const http = new XMLHttpRequest();

    http.open("GET", "https://type.fit/api/quotes", true);

    http.onload = function(){
        if (this.status===200){
            // console.log(this.responseText);
            const response = shuffle(JSON.parse(this.responseText));
            let output = "";
            // response.forEach(quote=>{
            //     output+=`
            //     <li>Quotes: ${quote.text}</li>
            //     <li>Author: ${quote.author}</li>
            //     <hr>
            //     `;
            // })

            for (let i=0; i<response.length; i++)
            {
                if (i==number.value){
                    break;
                }
                output+=`
                <li>Quotes: ${response[i].text}</li>
                <li>Author: ${response[i].author}</li>
                <hr>
                `
            }

            document.querySelector(".quotes").innerHTML = output;
        }
    }

    http.send();
}
}

//Function to shuffle codes
function shuffle(quotes){
    let currentIndex = quotes.length, tempValue, randomIndex;

    //while elements exist in the array
    while (currentIndex>0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        //Decrease current Index by 1
        currentIndex--;
        //Swap the last element with Current Index
        tempValue = quotes[currentIndex];
        quotes[currentIndex] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes;

}
