import { generatePool, giveTiles } from './letters.js'
import { createPlayer } from './players.js'
import { createBoard, board_width, board_height, double_lett } from './board.js'
export { lett_grabbed }

var lett_grabbed = null;

function gameOrganizer() {
    createBoard(board_width, board_height, 'board-container')
    generatePool()
    let p_1 = createPlayer('Santi')
    refreshUI(p_1)
}

function refreshUI(obj) {
    const plyr_formatting = document.querySelector('#curr-player')
    let plyr_tiles = document.createElement('div')
    plyr_tiles.id = 'curr-player-tiles'
    let plyr_name = "It's <i>" + obj.name + "</i>'s turn."
    plyr_formatting.appendChild(createUIText(plyr_name))
    if (!!obj.own_tiles){
        plyr_formatting.appendChild(createUIText('Your current tiles: '));
        let n = 0;
        for(let tile of obj.own_tiles) {
            let hidd_check = document.createElement('input')
            hidd_check.type = 'checkbox'
            hidd_check.className = 'hidden'
            hidd_check.id = 'check_' + n
            document.querySelector('#check-container').appendChild(hidd_check)
            let createdT = createUITile(tile, hidd_check.id, n);
            n++
            plyr_tiles.appendChild(createdT);
            plyr_formatting.appendChild(plyr_tiles)
        } 
    }
}

function createUIText(str) {
    let text = document.createElement('p')
    text.className = 'curr-player-text'
    text.innerHTML = str
    return text
}

function createUITile(obj, id, n) {
    let tile_contain = document.createElement('label');
    tile_contain.className = 'player-tile'
    tile_contain.setAttribute('for', id)
    if(obj.letter != 'Blank') {
        let letter_name = document.createElement('p');
        letter_name.innerHTML = obj.letter;
        let score_numb = document.createElement('span');
        score_numb.innerHTML = obj.score;
        tile_contain.appendChild(letter_name);
        tile_contain.appendChild(score_numb);
    } else {
        let letter_name = document.createElement('p');
        letter_name.innerHTML = '?';
        tile_contain.appendChild(letter_name);
    }
    tile_contain.onclick=function(){ //this function makes the board and tiles interact
        tile_contain.id = 'tile-select'
        let score = tile_contain.textContent[1]
        if(!!tile_contain.textContent[2]) score += tile_contain.textContent[2];
        lett_grabbed = tile_contain.innerHTML
        /* {
            name: tile_contain.textContent[0],
            score: parseInt(score),
        } */
        console.log(lett_grabbed)
    }
    return tile_contain;
}

window.onload = gameOrganizer();