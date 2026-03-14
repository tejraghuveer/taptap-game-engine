class Timer {
    constructor(config) {
        this.timeLimit = config.timeLimit;
        this.currentTime = this.timeLimit;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.currentTime--;
            this.update();
            if (this.currentTime <= 0) {
                this.endGame();
            }
        }, 1000);
    }

    update() {
        console.log(`Time remaining: ${this.currentTime} seconds`);
    }

    endGame() {
        clearInterval(this.intervalId);
        console.log('Game over!');
    }

    reset() {
        this.currentTime = this.timeLimit;
    }
}

// Example usage:
// const gameTimer = new Timer({ timeLimit: 60 }); // 60 seconds
// gameTimer.start();