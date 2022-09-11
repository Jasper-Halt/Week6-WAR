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
class Deck {
    constructor() {
      this.deck = [];
  
      const suit = ["Hearts", "Spades", "Clubs", "Diamonds"];
      const rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
      const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      
      for (let i = 0; i < rank.length; i++) {
        for (let x = 0; x < suit.length; x++) {
          this.deck.push(new Card(rank[i], suit[x], value[i])); //combines suits, ranks, and values
        }
        let shuffledDeck = [];
        shuffledDeck = this.deck.sort(() => Math.random() - 0.5); //method to shuffle the deck
      }
  }
}

        //create a method to deal the cards (probably slice is going to be easiest) - distribute cards to Players 1 and 2
    
  

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

let player1 = new Player("Player");
console.log(player1);

let player2 = new Player("Computer");
console.log(player2);

  let deck1 = new Deck();
  console.log(deck1.deck);
