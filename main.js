deck1 = [];
deck2 = [];
deck3 = [];
deck = [];
discardDeck = [];
currentCard = null;

function loadDecks() {
    
    deck1 = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10'];
    deck2 = ['ii1', 'ii2', 'ii3', 'ii4', 'ii5'];
    deck3 = ['iii1', 'iii2', 'iii3', 'iii4', 'iii5'];   
}

function selectDifficulty1() {
    deck = deck1;
    $('#difficulty').html("I");
    $('#difficulty').addClass("badge-success");
    startGame();
}

function selectDifficulty2() {
    deck = deck1;
    deck = deck.concat(deck2);
    $('#difficulty').html("II");
    $('#difficulty').addClass("badge-warning");
    startGame();
}

function selectDifficulty3() {
    deck = deck1;
    deck = deck.concat(deck2);
    deck = deck.concat(deck3);
    $('#difficulty').html("III");
    $('#difficulty').addClass("badge-danger");
    startGame();
}

function restart() {
    $('.initially-hidden').hide();
    
    deck = [];
    discardDeck = [];
    currentCard = null;
    $('#current-card').attr("src", "images/back.png");
    $('#current-card').attr("alt", "back of card");
    
        
    //show logo
    $('.menu-logo').removeClass("d-none d-sm-inline");

    //show initial page
    $('#select-deck-container').show();
}

function startGame() {
    
    updateNumbers();
    
    $('#difficulty-menu-item').show();
    $('#number-of-cards-menu-item').show();
    $('#number-of-discarded-cards-menu-item').show();
    
    $('#restart-menu-item').show();
    
    $('.menu-logo').addClass("d-none d-sm-inline");
    $('#select-deck-container').slideToggle("slow", goToCurrentCard());
    
}

function goToCurrentCard() {
    $('#current-card-container').slideToggle();
}

function updateNumbers() {
    $('#number-of-cards').html(deck.length);
    $('#number-of-discarded-cards').html(discardDeck.length);
}

function drawCard() {
    if (currentCard != null) {
        discardDeck.push(currentCard);
    }
    currentCard = selectRandomCard();
    updateNumbers();
    
    //display current card
    $('#current-card').attr("src", "card-" + currentCard);
    $('#current-card').attr("alt", "card-" + currentCard);
}

function selectRandomCard() {
    
    if (deck.length == 0) {
        deck = discardDeck;
        discardDeck = [];
    }
    
    var card = deck[Math.floor(Math.random()*deck.length)];

    //remove the card just picked from the deck    
    deck.splice( $.inArray(card, deck), 1 );

    return card;
}

