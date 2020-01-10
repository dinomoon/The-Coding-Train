let grid;
let grid_new;
let score = 0;

function setup() {
    createCanvas(400, 400);
    noLoop();
    grid = blankGrid();
    grid_new = blankGrid();
    addNumber();
    addNumber();
    updateCanvas();
}

function updateCanvas() {
    background(255);
    drawGrid();
    select('#score').html(score);
}

function keyPressed() {
    let flipped = false;
    let rotated = false;
    let played = true;

    switch(keyCode) {
        case DOWN_ARROW:
            // DO NOTHING
            break;
        case UP_ARROW:
            grid = flipGrid(grid);
            flipped = true;
            break;
        case RIGHT_ARROW:
            grid = transposeGrid(grid, 1);
            rotated = true;
            break;
        case LEFT_ARROW:
            grid = transposeGrid(grid, 1);
            gird = flipGrid(grid);
            rotated = true;
            flipped = true;
            break;
        default:
            played = false;
    }

    if (played) {
        let past = copyGrid(grid);
        for (let i=0; i<4; i++) {
            grid[i] = operate(grid[i]);
        }
        let changed = compare(past, grid);
    
        if (flipped) {
            grid = flipGrid(grid);
        }
        if (rotated) {
            grid = transposeGrid(grid, -1);
        }
        
        if (changed) {
            addNumber();
        }
        updateCanvas();

        let gameover = isGameOver();
        if (gameover) {
            alert("GAME OVER");
        }

        let gamewon = isGameWon();
        if (gamewon) {
            alert("GAME WON");
        }
    }
}
