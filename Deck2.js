var startlink = "https://raw.githubusercontent.com/ImKennyYip/black-jack/master/cards/";
var endlink = ".png";

var tally = 0;
var gamemode = "hint"

var suits = ["S","D","C","H"];
var rank = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
var deck = [];

var acecountD = 0;
var acecountP = 0;

var hidden = 0;
var show = false;

var d2nd = 0;

var p1st = 0;
var p2nd = 0;
var p3rd = 0;

var handP = 0;
var handD = 0;

var cardsP = 0;
var cardsD = 0;

var cardcountP = 2;
var cardcountD = 2;

var end =false;
var canHit = true;
var canStay = true;

var wins = 0;
var losses = 0;
var draws = 0;

var auto = 0;


// get a random card in the deck
function randCard() {
    return Math.floor(Math.random() * (deck.length - 0) ) + 0 ; 
}

//shuffle the deck
function shuffle() {
    for (let i = 0; i < deck.length; i++) {
        let j = randCard();
        let temp = deck[i];
        deck[i] = deck[j]
        deck[j] = temp
    }
}

//create a new deck
function newdeck() {
    for (let i = 0; i < 4;i++) {
        for (let x = 0; x < 13; x++) {
            deck.push(rank[x]+"-"+suits[i])
        }
    }
    shuffle();
}

newdeck();
var cardindex = randCard();



shuffle();
shuffle();
shuffle();

//setting the origional 4 cards to a value in the deck, and removing that value from the list
hidden = deck.pop();
d2nd = deck.pop();
if (sumCards(d2nd)<=6) {
        tally++
    } else if (sumCards(d2nd)>=10) {
        tally -= 1;
    } else {
        tally +=0;
}
    document.getElementById("test5").innerHTML = tally;


p1st = deck.pop();
if (sumCards(p1st)<=6) {
        tally++
    } else if (sumCards(p1st)>=10) {
        tally -= 1;
    } else {
        tally +=0;
    }
    document.getElementById("test5").innerHTML = tally;

p2nd = deck.pop();
if (sumCards(p2nd)<=6) {
        tally++
    } else if (sumCards(p2nd)>=10) {
        tally -= 1;
    } else {
        tally +=0;
    }
    document.getElementById("test5").innerHTML = tally;

cardsD=[d2nd]
cardsP=[p1st,p2nd]



//takes your cards and whether you are player or dealer, and returns a number "p" or "d"
function sumCards(listcards,dp) {
    sumc = 0;
    
    for (i = 0;i < listcards.length; i++) {
        indsum = 0;

        let data = listcards[i].split("-")

        if (data[0]=="2") {
            indsum = 2;
        } else if (data[0]=="3") {
            indsum = 3;
        } else if (data[0]=="4") {
            indsum = 4;
        } else if (data[0]=="5") {
            indsum = 5;
        } else if (data[0]=="6") {
            indsum = 6;
        } else if (data[0]=="7") {
            indsum = 7;
        } else if (data[0]=="8") {
            indsum = 8;
        } else if (data[0]=="9") {
            indsum = 9;
        } else if (data[0]=="10") {
            indsum = 10;
        } else if (data[0]=="J") {
            indsum = 10;
        } else if (data[0]=="Q") {
            indsum = 10;
        } else if (data[0]=="K") {
            indsum = 10;
        } else if (data[0]=="A") {
            if (dp=="p"){
                acecountP += 1;
            } else if (dp=="d") {
                acecountD += 1;
            }
            
            indsum = 11
        } else {
            indsum = 0;
        }
        sumc = sumc + indsum;
    } 


    //calculates the amount of aces there are in your deck
    if (dp=="p") {
        tempaceP=0
        for (i=0;i<listcards.length;i++) {
                if (listcards[i].includes("A")==true) {
                    tempaceP +=1
                }
        }
        acecountP=tempaceP
    } else if (dp=="d") {
        tempaceD=0
        for (i=0;i<listcards.length;i++) {
            if (listcards[i].includes("A")==true) {
                tempaceD +=1
            }
        }
        acecountD=tempaceD
    }

    return sumc;


}


// changing aces from 11 to 1
function acesub(cardlist,aces) {
    if (cardlist>21 && aces>0) {
        cardlist=cardlist-10
        if (cardlist>21 && aces>1) {
            cardlist=cardlist-10
            if (cardlist>21 && aces>2) {
                cardlist=cardlist-10
                if (cardlist>21 && aces>3) {
                    cardlist=cardlist-10
                }
    
            }
        }
    }
    return cardlist;
}


//drawing a card
function addcard(hand) {
    if (hand=="handP") {
        cardcountP +=1;
        newcard=deck.pop();
        cardsP.push(newcard);
        document.getElementById("p"+cardcountP).src = startlink + newcard + endlink;
        document.getElementById("p"+cardcountP).classList = "card" ;
    } else if (hand=="handD") {
        cardcountD +=1;
        newcard=deck.pop();
        cardsD.push(newcard);
        document.getElementById("d"+cardcountD).src = startlink + newcard + endlink;
    }
    if (hand=="handP"){
        handP=sumCards(cardsP,"p");
        handP=acesub(handP,acecountP);
    } else if (hand=="handD") {
        handD=sumCards(cardsD,"d");
        handD=sumCards(handD,acecountD);
    }
    if (sumCards(newcard)<=6) {
        tally++
    } else if (sumCards(newcard)>=10) {
        tally -= 1;
    } else {
        tally +=0;
    }
    document.getElementById("test5").innerHTML = tally;
        
}


//calculating the sum of your cards
handP = sumCards(cardsP,"p");
handP = acesub(handP,acecountP);

handD = sumCards(cardsD,"d");
handD = acesub(handD,acecountD);

//new game function
function newGame() {

    //refresh the deck if it has ran out
    if (deck.length == 0) {
        deck = [];
        newdeck();
        tally = 0;
        shuffle();
        //shuffle
        shuffle();
        shuffle();
        shuffle();
        shuffle();
    }




    //hint tex to blank
    document.getElementById("choice").innerHTML = "";

    //setting variables to their original state
    acecountD = 0;
    acecountP = 0;
    cardsP = 0;
    cardsD = 0;
    end =false;
    canHit = true;
    canStay = true;
    hidden = 0;
    show = false;
    cardcountP = 2;
    cardcountD = 2;

    

    
    
    
    

    //set the original cards to a new card in the deck
    hidden = deck.pop();
d2nd = deck.pop();
if (sumCards(d2nd)<=6) {
        tally++
    } else if (sumCards(d2nd)>=10) {
        tally -= 1;
    } else {
        tally +=0;
}
    document.getElementById("test5").innerHTML = tally;


p1st = deck.pop();
if (sumCards(p1st)<=6) {
        tally++
    } else if (sumCards(p1st)>=10) {
        tally -= 1;
    } else {
        tally +=0;
    }
    document.getElementById("test5").innerHTML = tally;

p2nd = deck.pop();
if (sumCards(p2nd)<=6) {
        tally++
    } else if (sumCards(p2nd)>=10) {
        tally -= 1;
    } else {
        tally +=0;
    }
    document.getElementById("test5").innerHTML = tally;


    cardsD=[d2nd]
    cardsP=[p1st,p2nd]

    //set hand numbers
    handP = sumCards(cardsP,"p");
    handP = acesub(handP,acecountP);

    handD = sumCards(cardsD,"d");
    handD = acesub(handD,acecountD);

    //card images

    document.getElementById("d2nd").src = startlink + d2nd + endlink;
    document.getElementById("p1st").src = startlink + p1st + endlink;
    document.getElementById("p2nd").src = startlink + p2nd + endlink;

    //display hand number

    document.getElementById("Dealer Hand").innerHTML = handD ;
    document.getElementById("Player Hand").innerHTML = handP ;



    //hide the extra cards

    document.getElementById("p3").classList = "card hidden" ;
    document.getElementById("p4").classList = "card hidden" ;
    document.getElementById("p5").classList = "card hidden" ;
    document.getElementById("p6").classList = "card hidden" ;
    document.getElementById("p7").classList = "card hidden" ;
    document.getElementById("p8").classList = "card hidden" ;
    document.getElementById("p9").classList = "card hidden" ;
    document.getElementById("p10").classList = "card hidden" ;
    document.getElementById("p11").classList = "card hidden" ;

    document.getElementById("d3").classList = "card hidden" ;
    document.getElementById("d4").classList = "card hidden" ;
    document.getElementById("d5").classList = "card hidden" ;
    document.getElementById("d6").classList = "card hidden" ;
    document.getElementById("d7").classList = "card hidden" ;
    document.getElementById("d8").classList = "card hidden" ;
    document.getElementById("d9").classList = "card hidden" ;
    document.getElementById("d10").classList = "card hidden" ;
    document.getElementById("d11").classList = "card hidden" ;


    //change dealer's second card image to the back side
    document.getElementById("hidden").src = startlink + "BACK" + endlink ;
    
    //set win/loss text to blank
    document.getElementById("end text").innerHTML = "";


    // test text (can be removed)


    

}


//hit function
function hitcard() {
    if (canHit) {
        if (deck.length == 0) {
            newdeck();
        }
        addcard("handP")
        document.getElementById("Player Hand").innerHTML = handP;
        document.getElementById("test4").innerHTML = deck.length;


        


        if (handP>=21) {
            canHit = false;
        }
        
    }
}

//hit button
var button = document.getElementById("hit");

button.addEventListener('click', (event) => {
  event.preventDefault();
    hitcard();

});


// stay function
function stay() {
    if (canStay) {
        document.getElementById("hidden").src = startlink + hidden + endlink
        cardsD.push(hidden)
        handD=sumCards(cardsD,"d")
        handD=acesub(handD,acecountD)
        document.getElementById("Dealer Hand").innerHTML = handD;
        end = true;
        canHit = false;

    

        if (end && handD<17) {
            while (handD<17) {
                cardcountD += 1;
                newcard=deck.pop()
                cardsD.push(newcard)
                handD = sumCards(cardsD,"d")
                handD = acesub(handD,acecountD)
                document.getElementById("Dealer Hand").innerHTML = handD;
                document.getElementById("d"+cardcountD).src = startlink + newcard + endlink;
                document.getElementById("d"+cardcountD).classList = "card";
            }
        }

    

        if (end) {
            if (handP<=21) {
                if (handP>handD) {
                    document.getElementById("end text").innerHTML = "You Win!";
                    wins++;
                } else if(handD>21 && handP<=21) {
                    document.getElementById("end text").innerHTML = "You Win!";
                    wins++;
                } else if (handD>=handP && handP !==21) {
                    document.getElementById("end text").innerHTML = "Dealer Wins!";
                    losses++;
                } else if (handP==21 && handD==21 && cardcountP==2 && cardcountD==2) {
                    document.getElementById("end text").innerHTML = "Draw!";
                    draws++;
                }
            } else {
                document.getElementById("end text").innerHTML = "Bust!";
                losses++;
            }
    
        }
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("draws").innerHTML = draws;
        canStay=false;
    }
}




//stay button
var button2 = document.getElementById("stay");




button2.addEventListener('click', (event) => {
  event.preventDefault();
    if (canStay) {
        document.getElementById("hidden").src = startlink + hidden + endlink
        cardsD.push(hidden)
        handD=sumCards(cardsD,"d")
        handD=acesub(handD,acecountD)
        document.getElementById("Dealer Hand").innerHTML = handD;
        end = true;
        canHit = false;

    

        if (end && handD<17) {
            while (handD<17) {
                cardcountD += 1;
                newcard=deck.pop()
                cardsD.push(newcard)
                handD = sumCards(cardsD,"d")
                handD = acesub(handD,acecountD)
                if (sumCards(newcard)<=6) {
                    tally++
                } else if (sumCards(newcard)>=10) {
                    tally -= 1;
                } else {
                    tally +=0;
                }
                document.getElementById("test5").innerHTML = tally;
                document.getElementById("Dealer Hand").innerHTML = handD;
                document.getElementById("d"+cardcountD).src = startlink + newcard + endlink;
                document.getElementById("d"+cardcountD).classList = "card";
            }
        }

    

        if (end) {
            if (handP<=21) {
                if (handP>handD) {
                    document.getElementById("end text").innerHTML = "You Win!";
                    wins++;
                } else if(handD>21 && handP<=21) {
                    document.getElementById("end text").innerHTML = "You Win!";
                    wins++;
                } else if (handD>=handP && handP !==21) {
                    document.getElementById("end text").innerHTML = "Dealer Wins!";
                    losses++;
                } else if (handP==21 && handD==21 && cardcountP==2 && cardcountD==2) {
                    document.getElementById("end text").innerHTML = "Draw!";
                    draws++;
                }
            } else {
                document.getElementById("end text").innerHTML = "Bust!";
                losses++;
            }
    
        }
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;
    canStay=false;
}

});

//newgame button
var button = document.getElementById("newgame");

button.addEventListener('click', (event) => {
  event.preventDefault();
    newGame();

});


//hint or play for you
var button = document.getElementById("gamemode");

button.addEventListener('click', (event) => {
  event.preventDefault();
    if (auto==0) {
        document.getElementById("gamemode").innerHTML = "auto 1 game";
        auto=1
    } else if (auto==1) {
        document.getElementById("gamemode").innerHTML = "hints";
        auto=0
    }

});

 
//setting card images and number for the first time
document.getElementById("d2nd").src = startlink + d2nd + endlink;
document.getElementById("p1st").src = startlink + p1st + endlink;
document.getElementById("p2nd").src = startlink + p2nd + endlink;

document.getElementById("Dealer Hand").innerHTML = handD ;
document.getElementById("Player Hand").innerHTML = handP ;

document.getElementById("test5").innerHTML = tally;