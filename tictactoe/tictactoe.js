let X = document.getElementById("x")
let O = document.getElementById("o")
X.innerText = 0;
O.innerText = 0;
let tiles = document.getElementsByClassName("tile");
let board = ["","","","","","","","",""];
const winCombo = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
    [3,4,5],
    [6,7,8],
]
let result = document.getElementsByClassName("result")[0];
let btn = document.getElementById("reset");
btn.addEventListener("click", reset);

let user = "X";
whoseTurn("O");

for (let i = 0; i < tiles.length; i++){
    tiles[i].addEventListener('click', (evt) => 
        {   
            if (evt.target.innerText != ""){
                alert("Please choose an empty tile")
                return
            }
            whoseTurn(user);
            user = user === "X" ? "O" : "X";
            putMove(user, evt);
            availMove();
            winCheck(user);
        })
} 

function putMove(user,evt){
    evt.target.classList.add("inner-tile")
    evt.target.innerText= user;
    board[evt.target.id] = user;
}

function availMove(){
    const empty = board.filter(tile => tile === "");
    if (empty.length > 0){
        return true;
    }
    result.innerHTML = `Draw!! Try again`;
    return false;
}

function winCheck(user){
  let moves = [];
  for (const i in board) {
    if (board[i] === user) {
      moves.push(parseInt(i));
    }
  }
  for (const i in winCombo) {
    if (winCombo[i].every((val) => moves.includes(val))) {
      result.innerHTML = `${user} won!!`;
       // winHighlight(winCombo[i]);
        if (user === "X"){
            X.innerHTML = parseInt(X.innerHTML) + 1;
        }else {
            O.innerHTML = parseInt(O.innerHTML) + 1;
        }
      break;
    }
  }
 
}  

function reset(){
    board = ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].innerHTML="";
    }
    whoseTurn("O");
}

function winHighlight(combo){
    for (let i in combo){
        tiles[combo[i]].classList.add("win")
    }
}

function whoseTurn(user){
    result.innerText= `${user} turn!`
}
