class ScoreManager {
    constructor(config) {
        this.pointsPerCorrect = config.pointsPerCorrect;
        this.score = 0;
    }

    addScore(correctAnswers) {
        this.score += correctAnswers * this.pointsPerCorrect;
    }

    getScore() {
        return this.score;
    }

    resetScore() {
        this.score = 0;
    }
}

export default ScoreManager;