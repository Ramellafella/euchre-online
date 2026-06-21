import { Deck } from "./deck.js"

const deck = new Deck();

deck.shuffle();

console.log(`Deck contains ${deck.getCards().length} cards`);

for (const card of deck.getCards()) {
    console.log(card.toString());
}