//PSEUDOCODE

// build a game with 4 crystal
// Every crystal needs to have a random nuber
// A new random number for all 4 crystals should be generated every time when user win or lost
// After any crystal is clicked it should add to total score untill it matches the total score
// If the total score exceedes the target score, user lose


//Global variables;

var randomResult;
var lossCount = 0;
var winCount = 0;
var currentScore = 0;
var targetScore = 0;

// TODO
// fix the bug when you click on it it should show the result and show lost/win message
// add padding in between crystal images-->css
// add descriptive Read me file and image.


//Created Crystal Object for 4 crystal
var Crystal = {
    Purple_crystal: {
        name: "Purple_crystal",
        value: 0

    },
    Blue_crystal: {
        name: "Blue_crystal",
        value: 0
    },
    Pink_crystal: {
        name: "Pink_crystal",
        value: 0
    },
    White_crystal: {
        name: "White_crystal",
        value: 0
    }

};

//generates 4 numbers for all crystal
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {

    currentScore = 0;

    targetScore = getRandom(19, 120);

    Crystal.Purple_crystal.value = getRandom(1, 12);
    Crystal.Blue_crystal.value = getRandom(1, 12);
    Crystal.Pink_crystal.value = getRandom(1, 12);
    Crystal.White_crystal.value = getRandom(1, 12);


    $("#current-score").html(currentScore);
    $("#target-score").html(targetScore);

}

var addValues = function(Crystal) {
        // change the current Score 
        currentScore = currentScore + Crystal.value;
        // change the HTML to reflect change in current score
        $("#current-score").html(currentScore);

        // call checkWin function
        checkWin();
        console.log("Your Score;" + currentScore);

    }
    // check if user  won or lost and reset the Game

var checkWin = function() {
    if (currentScore > targetScore) {
        alert("You lost, please try again!");
        console.log("You Lost");
        // Add to loss counter 
        lossCount++;

        // Change loss count html
        $("#loses").html(lossCount);
        startGame();

    } else if (currentScore == targetScore) {
        alert("Congratulations ! You Won!");
        console.log("You Won");

        //Add to the win counter
        winCount++;
        // Change Win count html
        $("#wins").html(win);

        //Restart the game 
        startGame();
    }
}

// clicks each crystal and alert it.
startGame();
$("#Purple_crystal").click(function() {
    //alert("Puple crystal is clicked!");
    addValues(Crystal.Purple_crystal);
});
$("#Blue_crystal").click(function() {
    //alert("Blue crystal is clicked!")
    addValues(Crystal.Blue_crystal);

});
$("#Pink_crystal").click(function() {
    //alert("Pink crystal is clicked!")
    addValues(Crystal.Pink_crystal);

});
$("#White_crystal").click(function() {
    //alert("White crystal is clicked!")
    addValues(Crystal.White_crystal);

});