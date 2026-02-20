let user_scoreE=document.querySelector("#user_score");
let bot_scoreE=document.querySelector("#bot_score");

let user_score=0;
let bot_score=0;

const choices=document.querySelectorAll(".choice");

let msg=document.querySelector("#msg");

const generete_bot_choice=()=>{                          //getting choice from computer
    const options=["rock","paper","scissor"];
    const random_idx=Math.floor(Math.random()*3);        //for generating 0,1,2 randomly
    return options[random_idx];
}

draw_game=()=>{                                          //condition for draw
    msg.innerText="game draw, play again";
    msg.style.backgroundColor="black";
}

const show_winner=(user_win, user_choice, bot_choice)=>{  // for showing winner on screen
    if(user_win){
        msg.innerText=`you won, ${user_choice} beats ${bot_choice}`;
        msg.style.backgroundColor="green";
        user_score++;
        user_scoreE.innerText=user_score;

    } else{
        msg.innerText=`you lose, ${bot_choice} beats ${user_choice}`;
        msg.style.backgroundColor="red";
        bot_score++;
        bot_scoreE.innerText=bot_score;
    }
}

const play_game=(user_choice)=>{                          // logic of the game
    const bot_choice=generete_bot_choice();

    if(user_choice===bot_choice){
        //draw
        draw_game();
    }
    else{

        let user_win=true;

        if(user_choice==="rock"){                       //ternary operators
           user_win = bot_choice==="paper"?false:true;
        } 
        
        else if(user_choice==="paper"){
            user_win= bot_choice==="scissor"?false:true;
        }


        else if(user_choice==="scissor"){
            user_win= bot_choice==="rock"?false:true;
        }
        show_winner(user_win,user_choice,bot_choice);
    }

}

choices.forEach((choice)=>{                              //getting choice from user
    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id");
        play_game(user_choice);
        
    })
})