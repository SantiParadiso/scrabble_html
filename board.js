import {lett_grabbed} from './index.js'
export {board_width, board_height, start_sq, triple_word, triple_lett, double_lett, double_word, createBoard, lett_grabbed}

var temp_lett = lett_grabbed;

function generateSquares(x, y, container) {
    let n = 0; // n gives every position in the board it's unique id
    for(let j=0;j<y;j++){
        let row = document.createElement("div");
        row.className = 'row'
        row.setAttribute("id", "row_" + j);
        document.getElementById(container).appendChild(row) // The rows are for formatting purposes, we will probably not use them, still they are ID'd
        for(let i=0;i<x;i++){
            let square = document.createElement("div");
            square.className = 'square';
            square.setAttribute("id", "pos_" + n);
            document.querySelector("#" + row.id).appendChild(square)
            boardClicker(square.id)
            n++;
        }
    }   
}
// Create the board tags
function createTag(str) {
    let tag = document.createElement('span');
    tag.className = 'sp_tag';
    tag.innerHTML = str;
    return tag
}
 // I absolutely hate how scrabble spreads it's special squares
 // so I'm going to just assume this board will always be the standard scrabble one
 // Don't blame me, blame Hasbro.
function generateSpecial(x, y) {
    //starting square (the middle one)
    document.getElementById('pos_'+start_sq).className = 'sq_start';
    //triple word
    for(let i=0; i<triple_word.length; i++) {
        document.getElementById('pos_'+triple_word[i]).appendChild(createTag('TRIPLE WORD'))
        document.getElementById('pos_'+triple_word[i]).className = 'sq_tripleW';
    }
    //triple letter
    for(let i=0; i<triple_lett.length; i++) {
        document.getElementById('pos_'+triple_lett[i]).appendChild(createTag('TRIPLE LETTER'))
        document.getElementById('pos_'+triple_lett[i]).className = 'sq_tripleL';
    }
    //double word
    for(let i=0; i<double_word.length; i++) {
        document.getElementById('pos_'+double_word[i]).appendChild(createTag('DOUBLE WORD'))
        document.getElementById('pos_'+double_word[i]).className = 'sq_doubleW';
    }
    //double letter
    for(let i=0; i<double_lett.length; i++) {
        document.getElementById('pos_'+double_lett[i]).appendChild(createTag('DOUBLE LETTER'))
        document.getElementById('pos_'+double_lett[i]).className = 'sq_doubleL';
    }
}
function boardClicker(id) {
    const board_Sq = document.querySelector('#'+id)
    board_Sq.onclick=function(){
        if(!!temp_lett) {
            board_Sq.className = 'placed-tile'
            board_Sq.innerHTML = lett_grabbed
            temp_lett = null;
        } else console.log('gordop')
    }
}

function createBoard(x, y, id) {
    generateSquares(x, y, id)
    generateSpecial()
}

// It's 15x15, standard scrabble. Not planning to make it modular soon.
const board_width = 15;
const board_height = 15;
// I define special squares down here to use them later with the score calculations.
const start_sq = 112;
const triple_word = [0, 7, 14, 105, 119, 210, 217, 224]
const triple_lett = [20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204]
const double_word = [16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208]
const double_lett = [3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 122, 126, 128, 132, 165, 172, 179, 186, 188, 213, 221]
//window.onload = createBoard(board_width, board_height, 'board-container')