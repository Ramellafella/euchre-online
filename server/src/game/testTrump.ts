import { Card } from "./card.js";
import { isRightBower, isLeftBower, getEffectiveSuit } from "./trump.js";

const trump = "hearts";
const right = new Card ("hearts", "J");
const left = new Card ("diamonds", "J");

console.log("Right:", isRightBower(right, trump));
console.log("Left:", isLeftBower(left, trump));
console.log("Effective Suit:", getEffectiveSuit(left, trump));
