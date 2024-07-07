var cells=document.querySelectorAll('.grid>*');
var messageEl=document.querySelector('.message');
var btnStartEl=document.querySelector('.btn-start');
var started=false;
var nextPlayer='X';
var state=[
    '','','',
    '','','',
    '','',''
];
var winningStates=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function isGameOver(){
for(var i=0;i<winningStates.length;++i){
    var x=winningStates[i][0];
    var y=winningStates[i][1];
    var z=winningStates[i][2];
    if(state[x]!=='' && state[x]===state[y] && state[y]===state[z]){
        messageEl.innerText=nextPlayer+'has won';
        return true;
    }
}
for(var i=0;i<state.length;++i){
    if(state[i]===''){
        return false;
    }
}
messageEl.innerText='game over';
return true;//if all cells are occupied, the game is over
}
function onCellClick(index){
if(!started){
    alert('click on start button');
    return;//return statement because we do not want to proceed. undefined value
}
if(state[index]!==''){
    alert('that cell is taken');
    return;
}
state[index]=nextPlayer;
//fill out the cell with that. X and O. two players
cells[index].innerText=nextPlayer;
if(isGameOver()){
    started=false;
    return;
}
nextPlayer=(nextPlayer==='X')?'O':'X';
displayNextPlayer();
}
function clearBoard(){
    cells.forEach(function(cell){
cell.innerText='';
    });
}
function displayNextPlayer(){
    messageEl.innerText='next turn:'+nextPlayer;
}
function startGame(){
    started=true;
    nextPlayer='X';
    state=[
        '','','',
        '','','',
        '','',''
    ];
    clearBoard();
    displayNextPlayer();
}
cells.forEach(function(cell,index){
cell.addEventListener('click',function(){
onCellClick(index);
});
});
btnStartEl.addEventListener('click',startGame);