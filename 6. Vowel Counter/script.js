const btn = document.querySelector(".btn");
const word = document.querySelector(".input-text");
const result = document.querySelector(".result");
btn.addEventListener("click", checkVowel);

function checkVowel(){
    let text = word.value;
    let vowelCount = 0;
     
    for (let i=0; i<text.length; i++)
    {
        if (text[i].match(/([a, e, i, o, u])/)){
            vowelCount++;    
        }
    }
    result.innerHTML = `${text.toUpperCase()} has ${vowelCount} vowels`;
}