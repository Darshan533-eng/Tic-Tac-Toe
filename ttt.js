let turn='O';
let tt=0;
let winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let board_arr=new Array(9).fill("E");

const board=document.querySelector('.board');
function checkwinner(){
    for(let [index0,index1,index2] of winner){
        if(board_arr[index0]!="E" && board_arr[index0]===board_arr[index1] && board_arr[index1]===board_arr[index2]){
            return 1;
        }  
    }
    return 0;
}
const p=(event)=>{
    const element=event.target;
    if(board_arr[element.id]==="E"){
        tt++;
        if(turn==='O'){
            element.innerHTML="O";
            board_arr[element.id]="O";
            if(checkwinner()){
                document.getElementById('winningMessage').innerHTML="Winner is O";
                board.removeEventListener('click',p);
                return;
            }
            turn='X';
        }
        else{
            element.innerHTML="X";
            board_arr[element.id]="X";
            if(checkwinner()){
                document.getElementById('winningMessage').innerHTML="Winner is X";
                board.removeEventListener('click',p);
                return;
            }
            turn='O';
        }
        if(tt==9){
            document.getElementById('winningMessage').innerHTML="Match is Draw";

        }
    }
}
board.addEventListener('click',p);
const rest=document.getElementById('restartButton');
rest.addEventListener('click',()=>{
    const cell=document.getElementsByClassName('cell');
    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    })
    turn='0';
    tt=0;
    board_arr=new Array(9).fill("E");
    document.getElementById('winningMessage').innerHTML="";

    board.addEventListener('click',p);
    
})
