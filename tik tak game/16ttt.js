/*
design of box and 2 buttons- reset, new game and heading --> game name
mark x and o on click of button
winning pattern
declare winner
stop box after winning 
congratulation pop after winning
logic of 2 buttons
*/

/*
design
body -> container -> game -> box
*/

/*
make the button clickable --> .forEach()
event click--> 
acces the box --> 
add event listner --> 
mark the sign
*/

let boxes=document.querySelectorAll(".box");
let turnO=true;

let message_container=document.querySelector(".message_container");
let msg=document.querySelector("#msg");
let reset_btn=document.querySelector("#reset_game_btn");
let new_game_btn=document.querySelector("#new_game_btn");

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;  //to prevent second use of the same box // but i don't understand this 
        check_winner();
    })
})

/*
now, make winning patterns
an array of it
*/

const winPatterns = [  //the combination to win the game
  [0, 1, 2], // row 1
  [3, 4, 5], // row 2
  [6, 7, 8], // row 3
  [0, 3, 6], // col 1
  [1, 4, 7], // col 2
  [2, 5, 8], // col 3
  [0, 4, 8], // diagonal
  [2, 4, 6]  // diagonal
];

const check_winner=()=>{  //fn to check winnes
    for(pattern of winPatterns){ // access all individual elt i.e. a winning combination out of all 8 elts i.e. different winning patterns
        
        //this will acess the innertext i.e. X or O of each box in the pattern elt --> like if we take pattern 2 which is 3,4,5 --> this will acces all three box and check the inner text in it
        let val1box=boxes[pattern[0]].innerText;
        let val2box=boxes[pattern[1]].innerText;
        let val3box=boxes[pattern[2]].innerText;
    

        if(val1box!="" && val2box!="" && val3box!=""){ //prevent to declare winner when any of the three box is empty
            if(val1box===val2box && val2box===val3box){ //if the sign in the boxes of winning combination is same
                show_winner(val1box);
            }
        }
    }
}

const show_winner=(winner)=>{  //show winner on screen
    msg.innerText=`🎉 winner is ${winner}`;
    message_container.classList.remove("hide"); //this thing is not working
    disable_box();
}

const disable_box=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enable_box=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const restart_game=()=>{
    turnO=false;
    enable_box();
    message_container.classList.add("hide");
}

reset_btn.addEventListener("click",restart_game);
new_game_btn.addEventListener("click",restart_game);

