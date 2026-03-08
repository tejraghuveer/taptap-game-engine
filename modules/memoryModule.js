// Memory Card Game Implementation

class MemoryCardGame {
    constructor(cards) {
        this.cards = cards;
        this.shuffleCards();
        this.selectedCards = [];
        this.matchedCards = [];
    }

    shuffleCards() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    selectCard(card) {
        if (!this.selectedCards.includes(card) && this.selectedCards.length < 2) {
            this.selectedCards.push(card);
            if (this.selectedCards.length === 2) {
                this.checkForMatch();
            }
        }
    }

    checkForMatch() {
        const [firstCard, secondCard] = this.selectedCards;
        if (firstCard === secondCard) {
            this.matchedCards.push(firstCard);
            this.selectedCards = [];
        } else {
            setTimeout(() => {
                this.selectedCards = [];
            }, 1000);
        }
    }

    isGameWon() {
        return this.matchedCards.length === this.cards.length;
    }
}

// Example usage:
const game = new MemoryCardGame(['A', 'B', 'C', 'A', 'B', 'C']);
// game.selectCard('A');
// game.selectCard('B');

