This project can manage decks with cards

## Main page

* You can see
    -  List of Decks
    -  Create a new Decks
* You can manage
    -  Decks: See all decks and create new one.


## Detail Detail

* You can see
    -  Number of cards
* You can manage
    -  Cards: Add new cards to deck or to see in quiz mode

## Folder Structure

After creation, your project should look like this:

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── data # All the files to manage data
    │   ├── Actions.js # Actions for decks
    │   ├── Reducers.js  # Reducer function for decks    
    │   ├── DeckDB.js #Save decks information in local storage       
    │   └── NotificationsDB.js #Save and configure notifications
    ├── components
    │   ├── DeckDetail.js # Deck detail and manage to add cards and play a quiz
    │   ├── ListDecks.js # List of the decks
    │   ├── NewCard.js # Add a card to deck
    │   ├── NewDeck.js # Add a new deck to app  
    │   └── QuizDetail.js #See all the cards of a deck like a quiz
    ├── menus         
    │   └── Menu.js  # Save navigation by app
    ├── utils
    │   ├── colors.js #Common colors for app  
    │   └── styles.js #Common styles for app
    ├── views # differents views in app
    │   └── Home.js #Define main page
    ├── App.js # This is router page of my application      
    ├── index.css # Global styles.
    └── index.js # Here you render my app

```
