import { Card } from "./card.js";
import type { Suit } from "./types.js";

export function getLeftBowerSuit(trump: Suit) {
    switch (trump) {
        case "hearts":
            return "diamonds";

        case "diamonds":
            return "hearts";

        case "clubs":
            return "spades";

        case "spades":
            return "clubs";
    }
}

export function isRightBower(card: Card, trump: Suit): boolean {
    return (card.rank === "J" && card.suit === trump);
}

export function isLeftBower(card: Card, trump: Suit): boolean {
    return (card.rank === "J" && card.suit === getLeftBowerSuit(trump));
}

export function getEffectiveSuit (card: Card, trump: Suit): Suit {
    if (isLeftBower(card, trump)) {
        return trump;
    }

    return card.suit;
}

export function getTrumpRank (card: Card, trump: Suit): number {
    if (isRightBower(card, trump)) {
        return 200;
    }

    if (isLeftBower(card, trump)) {
        return 190;
    }

    const ranks = {
        A: 180,
        K: 170,
        Q: 160,
        J: 150,
        "10": 140,
        "9": 130
    };

    return ranks[card.rank];
}

export function getNormalRank (card: Card): number {
    const ranks = {
        A: 60,
        K: 50,
        Q: 40,
        J: 30,
        "10": 20,
        "9": 10
    };

    return ranks[card.rank];
}