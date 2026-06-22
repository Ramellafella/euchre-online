import { Card } from "./card.js";

export class Player {
    public hand: Card[] = [];

    constructor(
        public id: string, 
        public name: string
    ) {}

    receiveCard (card:Card): void {
        this.hand.push(card);
    }
}