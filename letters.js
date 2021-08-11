export {generatePool, giveTiles, tiles, totalTiles}

var tiles = []
var totalTiles = 0;

class LetterTile {
    constructor(letter, score, q) {
        this.letter= letter;
        this.score= score;
        this.quantity = q;
    }
}

function constructTile(letter, score, q) { // I defined this for cleanliness
        return new LetterTile(letter, score, q);
} 

function generatePool() {
    tiles = [ //100 tiles in the pool
        constructTile('Blank', 0, 2),
        constructTile('A', 1, 9),
        constructTile('B', 3, 2),
        constructTile('C', 3, 2),
        constructTile('D', 2, 4),
        constructTile('E', 1, 12),
        constructTile('F', 4, 2),
        constructTile('G', 2, 3),
        constructTile('H', 4, 2),
        constructTile('I', 1, 9),
        constructTile('J', 8, 1),
        constructTile('K', 5, 1),
        constructTile('L', 1, 4),
        constructTile('M', 3, 2),
        constructTile('N', 1, 6),
        constructTile('O', 1, 8),
        constructTile('P', 3, 2),
        constructTile('Q', 10, 1),
        constructTile('R', 1, 6),
        constructTile('S', 1, 4),
        constructTile('T', 1, 6),
        constructTile('U', 1, 4),
        constructTile('V', 4, 2),
        constructTile('W', 4, 2),
        constructTile('X', 8, 1),
        constructTile('Y', 4, 2),
        constructTile('Z', 10, 1),
    ];
    tiles.forEach((item) => {
        totalTiles+= item.quantity
    })
}

// This iterates over the quantity of letters, so it minimizes the possiility that
// you get difficult or really highscore letters that would make your playing complicated
function giveTiles(amount) {
    if(amount === null) amount = 1;
    if(totalTiles <= 0) return null;
    var tileAcc = [] // This is the accumulator
    for(let i=0; i<amount; i++) {
        let point = 0;
        let position = Math.floor(Math.random() * (totalTiles+1))
        for(var item of tiles) {
            position -= item.quantity
            if(position<=0){
                tiles[point].quantity--
                tileAcc.push(tiles[point])
                totalTiles--
                break
            } else {
                point++;
            }
        };
    }
    return tileAcc
    } 

/* export default function gameOrganizer() {
    generatePool();

} */

//window.onload = gameOrganizer();