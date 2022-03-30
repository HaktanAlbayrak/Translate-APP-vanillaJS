const form = document.querySelector("#translate-form");
const wordElement = document.querySelector("#word");
const langElement1 = document.getElementById("language1");
const langElement2 = document.getElementById("language2");
const button = document.querySelector(".btn");
const outputLang = document.getElementById("outputLanguage");
const outputLang2 = document.getElementById("outputLanguage2");
const outputImage = document.getElementById("outputImage");
const outputImage2 = document.getElementById("outputImage2");


eventListners();

function eventListners(){
    button.addEventListener("click",translate);
    langElement1.onchange=language;
    langElement2.onchange=language;
}

function language(){

    const lang1 = langElement1.value;
    const lang2 = langElement2.value;
    if (lang1 == lang2) {
       return alert("Aynı dilleri seçtiniz!");
    }

    outputImage.src = `images/${langElement1.value}.png`;
    outputImage2.src = `images/${langElement2.value}.png`;
    outputLang.innerHTML = langElement1.options[langElement1.selectedIndex].textContent;
    outputLang2.innerHTML = langElement2.options[langElement2.selectedIndex].textContent;
    // console.log(langElement1.options[langElement1.selectedIndex].textContent);
}


async function translate() {

    const word = wordElement.value;
    const lang1 = langElement1.value;
    const lang2 = langElement2.value;


    const params = new URLSearchParams();

    params.append("q", word);

    params.append("source", lang1);

    params.append("target", lang2);

    params.append("api_key", `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`);
    const response = await fetch("https://libretranslate.de/translate",{
                    method: 'POST',
                    body: params,
                    headers: {
                        accept: "application/json",

                        "Content-Type": "application/x-www-form-urlencoded",
                    }
                  }); 
        const {translatedText} = await response.json();
        // console.log("çeviriii",translatedText);

        const translatedValue = document.querySelector("#translatedText");
        
    
        translatedValue.innerHTML +=`<h5>Çevrilen Kelime: <span id = "outputWord" style = "color :red;"> ${translatedText} </span></h5>`;
        
        return translatedText;
                  


}


translate();
language();