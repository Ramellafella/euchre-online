import { Card } from "./card.js"
import type { Rank, Suit } from "./types.js"

export class Deck {
    private cards: Card[] = [];

    constructor() {
        const suits: Suit[] = [
            "clubs", 
            "diamonds",
            "hearts",
            "spades"
        ];

        const ranks: Rank[] = [
            "9",
            "10",
            "J",
            "Q",
            "K",
            "A"
        ];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(suit, rank));
            }
        }
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [this.cards[i], this.cards[j]] = [this.cards[j]!, this.cards[i]!];
        }
    }

    draw(): Card | undefined {
        return this.cards.pop();
    }

    getCards(): Card[] {
        return [...this.cards];
    }
}