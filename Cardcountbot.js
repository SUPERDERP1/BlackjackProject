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


                stay();
                newGame();


                

                
            } else if (decision>=0, handP<=12) {

                hitcard();



            } else {
                break
            } 
            }
            if (handP>=17) {
            if (decision<0 && handP<19) {

                hitcard();




                
            } else if (decision>=0,handP>=19) {

                stay();
                newGame();



            } else {
                break
            } 
            }

             
        }

        stay();
        newGame();

        

        


});



var button = document.getElementById("gamemode");

button.addEventListener('click', (event) => {
  event.preventDefault();
    
    for (i=0;i<9000;i++) {
            decision = tally
            if (handP<17) {
            if (decision<1 && handP>12) {

                document.getElementById("choice").innerHTML = "stay";
                

                
            } else if (decision>=0, handP<=12) {

                document.getElementById("choice").innerHTML = "hit";

            } else {
                break
            } 
            }
            if (handP>=17) {
            if (decision<0 && handP<19) {
                document.getElementById("choice").innerHTML = "hit";


                
            } else if (decision>=0,handP>=19) {

                document.getElementById("choice").innerHTML = "stay";

            } else {
                break
            } 
            }

             
        }

});