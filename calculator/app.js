let display=document.querySelector(".display");
let buttons=document.querySelectorAll(".button");
let equal_to=document.querySelector("#equal");
let AC=document.querySelector("#AC");
let backspace=document.querySelector("#back_space");
let operators=document.querySelectorAll("#operator");

let expression="";

//clickable button
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{

        if(btn.id==="equal" || btn.id==="AC" || btn.id==="back_space") return;

        let value=btn.innerText;
        let operators="+-*/%.";
        

        //prevent starting with operator
        if(expression==="" && operators.includes(value)) return;

        //prevent double operator
        if(
            operators.includes(value) &&
            operators.includes(expression.slice(-1))
        ){
            return;
        }

        expression += value;
        display.innerText=expression;
    })
});

//equal_to button
equal_to.addEventListener("click",()=>{
    try {
        expression=eval(expression);
        display.innerText=expression;
    } catch (error) {
        display.innerText="error";
    }
})

//all clear button
AC.addEventListener("click",()=>{
    expression="";
    display.innerText="";
})

//backspace button
backspace.addEventListener("click",()=>{
    expression=expression.slice(0,-1);
    display.innerText=expression;
})

