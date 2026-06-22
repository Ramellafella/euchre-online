import { Dealer } from "./dealer.js";
import { Deck } from "./deck.js";
import { Player } from "./player.js";

const deck = new Deck();

deck.shuffle();

const players = [
    new Player("1", "Eddie"),
    new Player("2", "Ursula"),
    new Player("3", "Charlotte"),
    new Player("4", "Henry")
];

Dealer.dealFiveCards(deck, players);

for (const player of players) {
    console.log("");
    console.log (player.name);

    for (const card of player.hand) {
        console.log (card.toString());
    }

    console.log("");
    console.log("Cards remaining:", deck.getCards().length);
}