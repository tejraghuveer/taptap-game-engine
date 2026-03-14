class GridGame {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.score = 0;
        this.correctCells = this.generateCorrectCells();
        this.gridElement = this.createGrid();
        this.render();
    }

    generateCorrectCells() {
        // Randomly selects a few correct cells
        const totalCells = this.rows * this.cols;
        const correctCellCount = Math.floor(totalCells / 5);
        const correctCells = new Set();

        while (correctCells.size < correctCellCount) {
            const randCell = Math.floor(Math.random() * totalCells);
            correctCells.add(randCell);
        }
        return correctCells;
    }

    createGrid() {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.addEventListener('click', () => this.cellClicked(i, j, cell));
                grid.appendChild(cell);
            }
        }
        return grid;
    }

    cellClicked(row, col, cell) {
        const cellIndex = row * this.cols + col;
        if (this.correctCells.has(cellIndex)) {
            cell.classList.add('correct');
            this.score += 1;
        } else {
            cell.classList.add('incorrect');
        }
        this.updateScore();
    }

    updateScore() {
        // This function updates the score display in the UI
        document.getElementById('score').innerText = 'Score: ' + this.score;
    }

    render() {
        document.body.appendChild(this.gridElement);
        const scoreElement = document.createElement('div');
        scoreElement.id = 'score';
        scoreElement.innerText = 'Score: 0';
        document.body.appendChild(scoreElement);
    }
}

window.onload = () => {
    const game = new GridGame(5, 5); // A 5x5 grid
};