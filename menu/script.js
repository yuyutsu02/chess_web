const body=document.querySelector('body');




// top----------------------------

const logo=document.createElement('div');
const square=document.createElement('div');

logo.classList.add('logo');
square.classList.add('square');

body.append(logo);
logo.append(square);

//top animation
const whorse=document.createElement('div');
whorse.classList.add('whorse');
square.append(whorse);

const bking=document.createElement('div');
bking.classList.add('bking');
square.append(bking);

const bqueen=document.createElement('div');
bqueen.classList.add('bqueen');
square.append(bqueen);


// middle-----------------------------
const middle=document.createElement('div');
const play=document.createElement('a');
const chess=document.createElement('a');

middle.classList.add('middle');
play.classList.add('play');
play.setAttribute('href','../board/board.html');
chess.classList.add('chess');
chess.setAttribute('href','../board/board.html');

body.append(middle);
middle.append(play);
middle.append(chess);
play.innerHTML='<div class="txt">S T A R T</div>';
chess.innerHTML='<div class="txt">CHESS</div>';



// bottom-------------------------------
const bottom=document.createElement('div');
const para=document.createElement('div');

bottom.classList.add('bottom');
bottom.append(para);

body.append(bottom);
para.innerText='>-- by yuyutsu --<';





