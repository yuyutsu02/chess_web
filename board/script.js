const body=document.querySelector('body');
const container=document.createElement('div');
container.classList.add('container');
body.append(container);



//generating board
let color_white='white';
let color_black='black';
for(let i=1;i<=64;i++){
    const square=document.createElement('div');
    square.setAttribute('space','empty');
    square.classList.add('square');
    square.setAttribute('id',i);
    container.append(square);
    if((i%2)>0){
       square.classList.add(color_white);
    }else{square.classList.add(color_black);}

// row color swap after 8
    if((i%8)===0){
        const temp=color_white;
        color_white=color_black;
        color_black=temp;
    }
}



//square numbering
// const squares=document.querySelectorAll('.square');
// for(const square of squares){
//      square.innerHTML=square.id;
// }



//creating appending pieces


//black rook
const brook=document.createElement('img');
brook.setAttribute('src','../images/pieces/brook.png');
document.getElementById('1').append(brook);


//black knight
const bknight=document.createElement('img');
bknight.setAttribute('src','../images/pieces/bknight.png');
document.getElementById('2').append(bknight);

//black bishop
const bbishop=document.createElement('img');
bbishop.setAttribute('src','../images/pieces/bbishop.png');
document.getElementById('3').append(bbishop);

//black queen
const bqueen=document.createElement('img');
bqueen.setAttribute('src','../images/pieces/bqueen.png');
document.getElementById('4').append(bqueen);

//black king
const bking=document.createElement('img');
bking.setAttribute('src','../images/pieces/bking.png');
document.getElementById('5').append(bking);

//black bishop 2
const bbishop2=document.createElement('img');
bbishop2.setAttribute('src','../images/pieces/bbishop.png');
document.getElementById('6').append(bbishop2);

//black knight 2
const bknight2=document.createElement('img');
bknight2.setAttribute('src','../images/pieces/bknight.png');
document.getElementById('7').append(bknight2);

// black rook 2
const brook2=document.createElement('img');
brook2.setAttribute('src','../images/pieces/brook.png');
document.getElementById('8').append(brook2);

//black pawn1
const bpawn1=document.createElement('img');
bpawn1.setAttribute('src','../images/pieces/bpawn.png');
document.getElementById('9').append(bpawn1);

//black pawn2
const bpawn2=document.createElement('img');
bpawn2.setAttribute('src','../images/pieces/bpawn.png');
document.getElementById('10').append(bpawn2);

//black pawn3
const bpawn3=document.createElement('img');
bpawn3.setAttribute('src','../images/pieces/bpawn.png');
document.getElementById('11').append(bpawn3);

//black pawn4
const bpawn4=document.createElement('img');
bpawn4.setAttribute('src','../images/pieces/bpawn.png');
document.getElementById('12').append(bpawn4);

////black pawn5
const bpawn5=document.createElement('img');
bpawn5.setAttribute('src','../images/pieces/bpawn.png');
document.getElementById('13').append(bpawn5);

////black pawn6
const bpawn6=document.createElement('img');
bpawn6.setAttribute('src','../images/pieces/bpawn.png');
document.getElementById('14').append(bpawn6);

//black pawn7
const bpawn7=document.createElement('img');
bpawn7.setAttribute('src','../images/pieces/bpawn.png');
document.getElementById('15').append(bpawn7);

//black pawn8
const bpawn8=document.createElement('img');
bpawn8.setAttribute('src','../images/pieces/bpawn.png');
document.getElementById('16').append(bpawn8);

//white pawn1
const wpawn1=document.createElement('img');
wpawn1.setAttribute('src','../images/pieces/wpawn.png');
document.getElementById('49').append(wpawn1);

//white pawn2
const wpawn2=document.createElement('img');
wpawn2.setAttribute('src','../images/pieces/wpawn.png');
document.getElementById('50').append(wpawn2);

//white pawn3
const wpawn3=document.createElement('img');
wpawn3.setAttribute('src','../images/pieces/wpawn.png');
document.getElementById('51').append(wpawn3);

//white pawn4
const wpawn4=document.createElement('img');
wpawn4.setAttribute('src','../images/pieces/wpawn.png');
document.getElementById('52').append(wpawn4);

//white pawn5
const wpawn5=document.createElement('img');
wpawn5.setAttribute('src','../images/pieces/wpawn.png');
document.getElementById('53').append(wpawn5);

//white pawn6
const wpawn6=document.createElement('img');
wpawn6.setAttribute('src','../images/pieces/wpawn.png');
document.getElementById('54').append(wpawn6);

//white pawn7
const wpawn7=document.createElement('img');
wpawn7.setAttribute('src','../images/pieces/wpawn.png');
document.getElementById('55').append(wpawn7);

//white pawn8
const wpawn8=document.createElement('img');
wpawn8.setAttribute('src','../images/pieces/wpawn.png');
document.getElementById('56').append(wpawn8);

//white rook
const wrook=document.createElement('img');
wrook.setAttribute('src','../images/pieces/wrook.png');
document.getElementById('57').append(wrook);

////white knight
const wknight=document.createElement('img');
wknight.setAttribute('src','../images/pieces/wknight.png');
document.getElementById('58').append(wknight);

//white bishop
const wbishop=document.createElement('img');
wbishop.setAttribute('src','../images/pieces/wbishop.png');
document.getElementById('59').append(wbishop);

//white queen
const wqueen=document.createElement('img');
wqueen.setAttribute('src','../images/pieces/wqueen.png');
document.getElementById('60').append(wqueen);

//white king
const wking=document.createElement('img');
wking.setAttribute('src','../images/pieces/wking.png');
document.getElementById('61').append(wking);

//white bishop2
const wbishop2=document.createElement('img');
wbishop2.setAttribute('src','../images/pieces/wbishop.png');
document.getElementById('62').append(wbishop2);

////white knight2
const wknight2=document.createElement('img');
wknight2.setAttribute('src','../images/pieces/wknight.png');
document.getElementById('63').append(wknight2);

//white rook2
const wrook2=document.createElement('img');
wrook2.setAttribute('src','../images/pieces/wrook.png');
document.getElementById('64').append(wrook2);


//seeting class for pieces also filling space attribute
for(let i=1;i<=16;i++){
    document.getElementById(i).firstElementChild.classList.add('piece');
    document.getElementById(i).setAttribute('space','black');
}
for(let i=49;i<=64;i++){
    document.getElementById(i).firstElementChild.classList.add('piece'); 
    document.getElementById(i).setAttribute('space','white');
}


const draggables=document.querySelectorAll('.piece');
const containers=document.querySelectorAll('.square');


//drag drop feature
for(const draggable of draggables){
    draggable.addEventListener('dragstart',()=>{
        // console.log('gragstarted');
       draggable.classList.add('dragging');
    })
}
for(const draggable of draggables){
    draggable.addEventListener('dragend',()=>{
        // console.log('gragended');
        draggable.classList.remove('dragging');
       
    })
}
for(const container of containers){
    container.addEventListener('dragover',(e)=>{
        e.preventDefault();
        // console.log('over');
    })
}
for(const container of containers){
    container.addEventListener('dragenter',()=>{
        // console.log('enter');
    })
}
for(const container of containers){
    container.addEventListener('dragleave',()=>{
        // console.log('leave');
    })
}
for(const container of containers){
    container.addEventListener('drop',()=>{
        // console.log('drop');

        const check=container.getAttribute('space');
        const temp=document.querySelector('.dragging').parentElement.getAttribute('space');
        console.log(check);
        if(check==='empty'){
        document.querySelector('.dragging').parentElement.setAttribute('space','empty');
        container.append(document.querySelector('.dragging'));
        container.setAttribute('space',temp);
        
        }
        else if(((check==='white')&&(temp==='black'))||((check==='black')&&(temp==='white'))){
            document.querySelector('.dragging').parentElement.setAttribute('space','empty');
            container.removeChild(container.firstChild);
            container.append(document.querySelector('.dragging'));
            container.setAttribute('space',temp);
        }
    })
}



