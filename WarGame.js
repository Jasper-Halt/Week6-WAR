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
const suit = ["Hearts", "Diamonds", "Spades", "Clubs"]; //establishes suits, ranks, and values for the cards.
const rank = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Card {                              //creates card class, with suits, ranks, and values for each individual card in the deck.
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

class Player {                        //creates player class, establishing that each player will have a name, a hand (an array), and a score that starts at 0.
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}

class Deck {                       //creates the class for the deck of cards
    constructor() {
        this.deck = [];          //an empty array to hold the cards
    }
    createDeck() {
        for (let i = 0; i < rank.length; i++) {                //for loop iterates through the "rank" array
            for (let x = 0; x < suit.length; x++) {            //nested for loop iterates through the "suit" array, resulting in 52 cards.
                this.deck.push(new Card(rank[i], suit[x], value[i]))  /*pushes the cards to the empty "this.deck" array. By using the same variable (i) for
                                                                       both "rank" and "value," it ties those together, resulting in consistent values for all
                                                                       52 cards in the deck. */
            }
        let shuffledDeck = [];
        shuffledDeck = this.deck.sort(() => Math.random() - 0.5);   //an array sort method with a math.random command shuffles the deck.
        }
    }

    dealDeck() {                                      //deal deck function uses the slice method to cut the deck in half, distributing 26 cards to each player.
        player1.hand = this.deck.slice(0,26);
        player2.hand = this.deck.slice(26,52);
    }
}

function compareTest(x, y) {              //a test function, to check my reasoning that if/else statements will work for the game logic.
    if (x > y) {
        return "X wins!";
    } else if (x < y) {
        return "Y wins!";
    } else return "Tie!";
    }

let player1 = new Player("Player");        //creates the two Players ("Player" and "Computer"), instantiating the Player class.
let player2 = new Player("Computer");

let freshDeck = new Deck();              //instantiates the deck class, and calls the functions for creating and dealing the deck.
freshDeck.createDeck()
freshDeck.dealDeck();

class Game {                          //creates the class for the actual game (bizarrely, this was much easier than creating the card deck.)
    constructor() {

    }
    compareCards() {
        for (let round = 0; round < 26; round++) {                        //for loop iteratest through the 26 rounds of the game.
            if (player1.hand[round].value > player2.hand[round].value) {   //if statement for if Player 1 has the larger value for the round.
                player1.score = player1.score + 1;                        //adds one to Player 1's score if the condition above was met.
                console.log(`
    ROUND ${round}:

    PLAYER: ${player1.hand[round].rank} of ${player1.hand[round].suit}.
    COMPUTER: ${player2.hand[round].rank} of ${player2.hand[round].suit}.

    PLAYER wins the round!

    SCORE:
    PLAYER: ${player1.score}.    COMPUTER: ${player2.score}.
                `);                                                    //Object literal, making for easy control of how the round displays in the console.
            } else if (player2.hand[round].value > player1.hand[round].value) {   //if statement for if Player 2 has the larger value for the round.
                player2.score = player2.score + 1;                                //adds one to Player 2's score if condition above was met.
                console.log(`
                ROUND ${round}:

    PLAYER: ${player1.hand[round].rank} of ${player1.hand[round].suit}.
    COMPUTER: ${player2.hand[round].rank} of ${player2.hand[round].suit}.

    COMPUTER wins the round!

    SCORE:
    PLAYER: ${player1.score}.    COMPUTER: ${player2.score}.            
                `);                                                 
            } else {                                                   //"Else" statement for if the round ends in a tie.
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
        if (player1.score > player2.score) {                           //If/Else statement calls on the final iteration of "Score" to determine the winner.
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

let newGame = new Game();                                          //creates new game and calls the "compareCards" function that controls the game.
newGame.compareCards();
