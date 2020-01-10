function isGameWon() {
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            if (grid[i][j] == 2048) {
                return true;
            }
        }
    }
}

function isGameOver() {
    let gameover = true;
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            if (grid[i][j] == 0) {
                return false;
            }
            if (j !== 3 && grid[i][j] === grid[i][j+1]) {
                return false;
            }
            if (i !== 3 && grid[i][j] === grid[i+1][j]) {
                return false;
            }
        }
    }
    return true;
}

function compare(a,b) {
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            if (a[i][j] != b[i][j]) {
                return true;
            }
        }
    }
    return false;
}

function addNumber() {
    let options = [];
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            if (grid[i][j] === 0) {
                options.push({x: i, y: j});
            }
        }
    }
    if (options.length > 0) {
        let spot = random(options);
        let r = random(1);
        grid[spot.x][spot.y] = r > 0.1 ? 2 : 4;
        grid_new[spot.x][spot.y] = 1;
    }
}

function operate(row) {
    row = slide(row);
    row = combine(row);
    row = slide(row);
    return row;
}

function slide(row) {
    let arr = row.filter(val => val); //0이 아닌 값들을 arr에 넣기
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);
    return arr;
}

function combine(row) {
    for (let i=3; i>=1; i--) {
        let a = row[i];
        let b = row[i-1];
        if (a == b) {
            row[i] = a + b;
            score += row[i];
            row[i-1] = 0;
        }
    }
    return row;
}

