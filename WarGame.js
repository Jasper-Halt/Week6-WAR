/*
create a deck of cards
52 cards
4 classes (Hearts, Diamonds, Spades, Clubs)
4 ranks (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace)
values for each rank (2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
shuffle deck, deal 26 cards to each Player Array
compare each card; one point to whichever player has the higher value (basic Boolean comparison; if/else statement to determine who gets the point)
final score/declared winner at end of array
preferred: running score tally as game progresses
*/
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
    }

    dealDeck() {
        player1.hand = this.deck.slice(0,26);
        player2.hand = this.deck.slice(26,52);
    }
}

function compareTest(x, y) {
    if (x > y) {
        return "X wins!";
    } else if (x < y) {
        return "Y wins!";
    } else return "Tie!";
    }

let player1 = new Player("Player");
let player2 = new Player("Computer");

let freshDeck = new Deck();
freshDeck.createDeck()
freshDeck.dealDeck();

class Game {
    constructor() {

    }
    compareCards() {
        for (let round = 0; round < 26; round++) {
            if (player1.hand[round].value > player2.hand[round].value) {
                player1.score = player1.score + 1;
                console.log(`
    ROUND ${round}:

    PLAYER: ${player1.hand[round].rank} of ${player1.hand[round].suit}.
    COMPUTER: ${player2.hand[round].rank} of ${player2.hand[round].suit}.

    PLAYER wins the round!

    SCORE:
    PLAYER: ${player1.score}.    COMPUTER: ${player2.score}.
                `);
            } else if (player2.hand[round].value > player1.hand[round].value) {
                player2.score = player2.score + 1;
                console.log(`
                ROUND ${round}:

    PLAYER: ${player1.hand[round].rank} of ${player1.hand[round].suit}.
    COMPUTER: ${player2.hand[round].rank} of ${player2.hand[round].suit}.

    COMPUTER wins the round!

    SCORE:
    PLAYER: ${player1.score}.    COMPUTER: ${player2.score}.            
                `);
            } else {
                console.log(`
    ROUND ${round}:
    
    PLAYER: ${player1.hand[round].rank} of ${player1.hand[round].suit}.
    COMPUTER: ${player2.hand[round].rank} of ${player2.hand[round].suit}.

    This round ends in a tie!
    
    SCORE:
    PLAYER: ${player1.score}.    COMPUTER: ${player2.score}.
    `);
            }
        }
        if (player1.score > player2.score) {
            console.log(`
    PLAYER wins with a final score of ${player1.score} points.

    Refresh to shuffle the cards and play again!
    `);
        } else if (player2.score > player1.score) {
                console.log(`
    COMPUTER wins with a final score of ${player2.score} points.

    Refresh to shuffle the cards and play again!
    `);
            } else {
                console.log(`
    This game ended in a tie, with both players earning ${player1.score} points.

    Refresh to shuffle the cards and play again!
    `);
            }
        }
    }

let newGame = new Game();
newGame.compareCards();
/*deck is now shuffled and dealt, so that's big progress.
All that remains is the actual game:
1. Compare values between Player 1 and Player 2 arrays.
    If/else statements (If player1.hand.value[i] > player2.hand.value[i], increase player1's score by 1;
    else if player1.hand.value[i] < player2.hand.value[i], increase player 2's score by 1;
    else a tie, so no score change.)
2. Do unit testing (mocha/chai) on the comparison loop.
3. Loop through the arrays, so the comparison happens to all 26 cards, with each round printed to console.  Make the console.log a part of the loop.
3. declare a winner based on the final score values, with the result printed to console.

Probably just print it to the console for simplicity's sake.  It's already late, so I'd as soon be done with it.
*/