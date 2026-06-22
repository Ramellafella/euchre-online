import { Deck } from "./deck.js";
import { Player } from "./player.js";

export class Dealer {
    static dealFiveCards(
        deck: Deck,
        players: Player[]
    ): void {
        for (let round = 0; round < 5; round++) {
            for (const player of players) {
                const card = deck.draw();

                if(!card) {
                    throw new Error ("Deck ran out of cards");
                }

                player.receiveCard(card);
            }
        }
    }
}
