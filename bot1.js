var cardmatrix = 
/*3*/[["H","H","H","H","H","H","H","H","H","H"],
/*4*/["H","H","H","H","H","H","H","H","H","H"],
/*5*/["H","H","H","H","H","H","H","H","H","H"],
/*6*/["H","H","H","H","H","H","H","H","H","H"],
/*7*/["H","H","H","H","H","H","H","H","H","H"],
/*8*/["H","H","H","H","H","H","H","H","H","H"],
/*9*/["H","H","H","H","H","H","H","H","H","H"],
/*10*/["H","H","H","H","H","H","H","H","H","H"],
/*11*/["H","H","H","H","H","H","H","H","H","H"],
/*12*/["H","H","S","S","S","H","H","H","H","H"],
/*13*/["S","S","S","S","S","H","H","H","H","H"],
/*14*/["S","S","S","S","S","H","H","H","H","H"],
/*15*/["S","S","S","S","S","H","H","H","H","H"],
/*16*/["S","S","S","S","S","H","H","H","H","H"],
/*17*/["S","S","S","S","S","S","S","S","S","S"],
/*18*/["S","S","S","S","S","S","S","S","S","S"],
/*19*/["S","S","S","S","S","S","S","S","S","S"],
/*20*/["S","S","S","S","S","S","S","S","S","S"],
/*21*/["S","S","S","S","S","S","S","S","S","S"],
/*A,A*/["H","H","H","H","H","H","H","H","H","H"],
/*A,2*/["H","H","H","H","H","H","H","H","H","H"],
/*A,3*/["H","H","H","H","H","H","H","H","H","H"],
/*A,4*/["H","H","H","H","H","H","H","H","H","H"],
/*A,5*/["H","H","H","H","H","H","H","H","H","H"],
/*A,6*/["H","H","H","H","H","H","H","H","H","H"],
/*A,7*/["S","S","S","S","S","S","S","H","H","H"],
/*A,8*/["S","S","S","S","S","S","S","S","S","S"],
/*A,9*/["S","S","S","S","S","S","S","S","S","S"],
/*A,10*/["S","S","S","S","S","S","S","S","S","S"]]

;

var decision = 0;




const w = window.open()

const open = document.getElementById("open");

open.addEventListener("click", function() {
   w()
});







var button = document.getElementById("testbtn");

button.addEventListener('click', (event) => {
  event.preventDefault();
    
    


        if (deck.length == 0) {
            deck = [];
            newdeck();
            shuffle();
            shuffle();
            newGame();
        }

        for (i=0;i<9000;i++) {
            if (acecountP<1) {
            decision = cardmatrix[handP-3][handD-2];
            } else if (acecountP >=1) {
                decision = cardmatrix[7+handP][handD-2]
            }
            document.getElementById("test4").innerHTML = decision;
            if (decision == "S") {
                if (auto==1) {
                stay();
                newGame();
                } else {
                document.getElementById("choice").innerHTML = "stay";
                }
                
            } else if (decision == "H") {
                if (auto==1) {
                hitcard();
                }
                else {
                    document.getElementById("choice").innerHTML = "hit";
                }
            } else {
                break
            } 
        

             
        }
        if (auto==1){
        stay();
        newGame();
        }

        



});


var button = document.getElementById("gamemode");

button.addEventListener('click', (event) => {
  event.preventDefault();
    
    


        for (i=0;i<9000;i++) {
            if (acecountP<1) {
            decision = cardmatrix[handP-3][handD-2];
            } else if (acecountP >=1) {
                decision = cardmatrix[7+handP][handD-2]
            }
            document.getElementById("test4").innerHTML = decision;
            if (decision == "S") {
                if (auto==1) {
                stay();
                newGame();
                } else {
                document.getElementById("choice").innerHTML = "stay";
                }
                
            } else if (decision == "H") {
                if (auto==1) {
                hitcard();
                }
                else {
                    document.getElementById("choice").innerHTML = "hit";
                }
            } else {
                break
            } 
        

             
        }
        if (auto==1){
        stay();
        newGame();
        }

        



});
