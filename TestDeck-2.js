/*
create a deck of cards
52 cards
4 classes (Hearts, Diamonds, Spades, Clubs)
4 ranks (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace)
values for each rank (2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
shuffle deck, deal 26 cards to each Player Array
compare each card; one point to whichever player has the higher value (basic Boolean comparison; if/else statement to determine who gets the point)
final score/declared winner at end of array
preferred: user input to deal each card
preferred: running score tally as game progresses
*/
console.log("Hello");

const suit = ["Hearts", "Diamonds", "Spades", "Clubs"];
const rank = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }
    createDeck() {
        for (let i = 0; i < rank.length; i++) {
            for (let x = 0; x < suit.length; x++) {
                this.deck.push(new Card(rank[i], suit[x], value[i]))
            }
        let shuffledDeck = [];
        shuffledDeck = this.deck.sort(() => Math.random() - 0.5);
        }
        console.log(this.deck);
    }

    dealDeck() {
        player1.hand.push(this.deck.slice(0,26));
        console.log(player1.hand);
        player2.hand.push(this.deck.slice(26,52))
        console.log(player2.hand);
    }
}
let player1 = new Player("Player");
console.log(player1);

let player2 = new Player("Computer");
console.log(player2);

let freshDeck = new Deck();
freshDeck.createDeck()
freshDeck.dealDeck();

/*deck is now shuffled and dealt, so that's big progress.
Next steps: start the game.  Compare values between the Player 1 and Player 2 arrays.  Assign a score.
If/else statements to compare the values within the array (player1.hand.value vs. player2.hand.value?)
for loop to increase score.
