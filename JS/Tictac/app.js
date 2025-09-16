let boxes = document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0=true;//player0 or X
let count =0;  //To track draw

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn0=true;
    count=0;
    enableboxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O"
            box.classList.add("o-style");
            turn0=false
        }else{
            box.innerText="X"
            box.classList.add("x-style");
            turn0=true
        }
        box.disabled=true
        count++
        let isWinner=checkWinner();
        if(count===9&!isWinner){
            gameDraw();
        }
    });

});

const gameDraw=()=>{
    msg.innerText=`Game was draw`;
    msgContainer.classList.remove("hide");
    disableboxes();
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
            box.classList.remove("win-line", "x-style", "o-style"); // remove all styles


    }
}


const showWinner=(winner)=>{
    msg.innerText=`congrulations, winner ${winner}`;
    msgContainer.classList.remove("hide")

}
const checkWinner=()=>{

    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" & pos3val!=""){
            if(pos1val===pos2val&& pos2val===pos3val){
                showWinner(pos1val);
                highlightWinner(pattern);
                return true;
            }
        }
    }

}

const highlightWinner=(pattern)=>{
    pattern.forEach(index=>{
        boxes[index].classList.add("win-line")

    });


};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
