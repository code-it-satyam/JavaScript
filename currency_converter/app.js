/*
we have to do 2 things
1--> option for all country and change of flags
2--> echange rates
*/

let base_URL ="https://latest.currency-api.pages.dev/v1/currencies/usd.json"

 
const dropdowns = document.querySelectorAll(".dropdown select");
const btn= document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

//choosing options
for(let select of dropdowns){
    for(currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;

        //for already selecting USD and INR
        if(select.name==="from" && currcode==="USD"){
            newoption.selected="selected";
        }
        if(select.name==="to" && currcode==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
    });
}

//updating the flags
const updateFlag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;

    
}


//conversion
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let amount = document.querySelector(".amount input");
    let amtval = amount.value;

    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = "1";
    }

    let URL = `https://latest.currency-api.pages.dev/v1/currencies/${fromcurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    let data = await response.json();

    // getting exchange rate
    let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];

    let finalAmount = amtval * rate;

    msg.innerText =
        `${amtval} ${fromcurr.value} = ${finalAmount.toFixed(2)} ${tocurr.value}`;
});
