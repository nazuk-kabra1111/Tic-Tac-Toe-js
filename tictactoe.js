let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector(".reset");
let resbtn1=document.querySelector(".reset1");
let turn0=true; //playerX(X) and playerY(O)
let msg=document.querySelector(".msg");
let msg_text=document.querySelector(".msg_text");
const winningpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


for(let btn of boxes){
    btn.addEventListener("click",()=>{
        if(turn0==true){
            turn0=false;
            btn.classList.add("box");
            btn.innerText="O";
            btn.classList.add("Ocolor");
        }
        else{
            turn0=true;
            btn.classList.add("box");
            btn.innerText="X";
            btn.classList.add("Xcolor");
        }
        btn.disabled=true;
        checkwinner();
    })
}
const disableboxes=()=>{
    for(let btns of boxes){
        btns.disabled=true;
    }
}
const enableboxes=()=>{
    for(let btns of boxes){
        btns.disabled=false;
        btns.innerText=""
        btns.classList.remove("Ocolor", "Xcolor");
    }
}
// let c=0;
const showwinner=(winner)=>{
    msg_text.innerText=`Congratulations,Winner is ${winner}`;
    msg.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(let arr of winningpatterns){
        let val1=boxes[arr[0]].innerText;
        let val2=boxes[arr[1]].innerText;
        let val3=boxes[arr[2]].innerText;
        if(val1!="" && val2!="" && val3!="" && val1===val2 && val2===val3){
            // console.log(`${boxes[arr[0]].innerText} is winner`)
            showwinner(val1);
        }
    }
    let k=0;
    for(let btn2 of boxes){
        if(btn2.innerText===""){
            k=1;
        }
    }
    if(k===0){
        msg_text.innerText="TIE";
        msg.classList.remove("hide");
    }
}
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msg.classList.add("hide");
}
resbtn.addEventListener("click",resetgame);
resbtn1.addEventListener("click",resetgame);