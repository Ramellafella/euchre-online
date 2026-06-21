import type { Rank, Suit } from "./types.js";

export class Card {
    constructor(
        public suit: Suit,
        public rank: Rank
    ) {}

    toString(): string {
        return `${this.rank} of ${this.suit}`;
    }
}