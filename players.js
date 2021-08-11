export { createPlayer }
import { giveTiles } from "./letters.js";

class Player {
    constructor(name, id) {
        this.name = name;
        this.own_tiles = null;
        this.score_agg = null;
        this.curr_score = 0;
    }
}

function createPlayer(arg) {
    let plyr = new Player(arg)
    plyr.own_tiles = giveTiles(7);
    plyr.own_score = 0;
    return plyr;
}

//window.onload = gameOrganizer();
