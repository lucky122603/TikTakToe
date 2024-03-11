let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let hidden = document.querySelector(".hide");
let msg = document.querySelector(".message")

let turnx = true;

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnx == true){
            box.innerText = "X";   //player 1 or x
            turnx = false;
        }else{
            box.innerText = "O";   //player 2 or o
            turnx = true;
        }
        box.disabled = true;
        winner();
    });
});

let winner = () =>{
    for(let i of win){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1 == pos2 && pos3==pos2){
                if(pos1 == "X"){
                    msg.innerText = 'Player 1 is the Winner';
                }else{
                    msg.innerText = 'Player 2 is the Winner';
                }
                
              hidden.classList.remove("hide"); 
              dis();

            }
        }   
    }
}

const dis=()=>{
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const ena=()=>{
    turnx = true;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
    hidden.classList.add("hide"); 
}

newbtn.addEventListener("click",ena);
resetbtn.addEventListener("click",ena);