var button = document.getElementById("testbtn");

button.addEventListener('click', (event) => {
  event.preventDefault();
    
    
        document.getElementById("test5").innerHTML = tally;

        if (deck.length == 0) {
            deck = [];
            newdeck();
            shuffle();
            shuffle();
            newGame();
            tally = 0;
        }

        for (i=0;i<90000;i++) {
            decision = tally
            if (handP<17) {
            if (decision<1 && handP>12) {
                if (auto==1){

                stay();
                newGame();
                } else {
                document.getElementById("choice").innerHTML = "stay";
                }

                
            } else if (decision>=0, handP<=12) {
                if (auto==1) {
                hitcard();
                } else {
                document.getElementById("choice").innerHTML = "hit";
                }
            } else {
                break
            } 
            }
            if (handP>=17) {
            if (decision<0 && handP<19) {
                if (auto==1) {
                hitcard();
                } else {
                document.getElementById("choice").innerHTML = "hit";
                }

                
            } else if (decision>=0,handP>=19) {
                if (auto==1) {
                stay();
                newGame();
                } else {
                document.getElementById("choice").innerHTML = "stay";
                }
            } else {
                break
            } 
            }

             
        }
        if (auto==1) {
        stay();
        newGame();
        }
        

        


});