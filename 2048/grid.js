function blankGrid() {
    return [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ];
}

function drawGrid() {
    let w = 100;
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            noFill();
            strokeWeight(2);
            let val = grid[i][j];
            let s = val.toString();
            if (grid_new[i][j] === 1) {
                stroke('orange');
                strokeWeight(5);
                grid_new[i][j] = 0;
            } else {
                stroke(0);
            }
            if (val != 0) {
                fill(colorsAndSizes[s].bgcolor);
            } else {
                noFill();
            }
            rect(i*w, j*w, w, w);
            if (val !== 0) {
                textAlign(CENTER, CENTER);
                noStroke();
                fill(colorsAndSizes[s].color);
                textSize(colorsAndSizes[s].size);
                text(val, i * w + w / 2, j * w + w / 2);
            }
        }
    }
}

function copyGrid(grid) {
    let extra = blankGrid();
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            extra[i][j] = grid[i][j];
        }
    }
    return extra;
}

function flipGrid(grid) {
    for (let i=0; i<4; i++) {
        grid[i].reverse();
    }
    return grid;
}

// function rotateGrid(grid) {
//     let newGrid = blankGrid();
//     for (let i=0; i<4; i++) {
//         for (let j=0; j<4; j++) {
//             newGrid[i][j] = grid[j][i];
//         }
//     }
//     return newGrid;
// }

function transposeGrid(grid, direction) {
    let newGrid = blankGrid();
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            if (direction == 1) {
                newGrid[i][j] = grid[j][i];
            } else {
                newGrid[j][i] = grid[i][j];
            }
        }
    }
    return newGrid;
}
