let boxes= document.querySelectorAll(".box");
let turnO=true;
let message= document.querySelector(".msg-container");
let winMsg=document.querySelector(".win")
let restartGame=document.querySelector(".restart");
let resetGame=document.querySelector(".reset");
let mainContainer=document.querySelector(".container-tic")

let winnerPatter=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
    
    if(turnO){
        box.style.color="#ffb703"
        box.innerHTML="O";
        turnO=false;
    }
    else{
        box.style.color="#023047"
        box.innerHTML="X";
        turnO=true;
    }
        box.disabled=true;
        checkWinner();
})
})

const checkWinner=()=>{
    for(let pattern of winnerPatter){
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("you win")
            console.log(`winner is ${pos1val}`)
            showWinner(pos1val);
        }
    }
    }
}

const showWinner=(winner)=>{
    winMsg.innerText=`Congratualtion the wining player is ${winner}`
    message.classList.remove("hide")
    disablebox();
    mainContainer.classList.add("hide");

}

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const resetbtn=()=>{
    let turnO=true;
    enablebox()
    message.classList.add("hide");
    mainContainer.classList.remove("hide");

}

restartGame.addEventListener("click",resetbtn)
resetGame.addEventListener("click",resetbtn)




















