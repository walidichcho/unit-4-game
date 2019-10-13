

//need to assign random number for both computer and the crystals.
//need functions for the crystal button.
//need to add the total score when we click in each button.
//need If statement for wins and loses.
//and reset the game

$(document).ready(function () {

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //random varaible array for randam number chosen by the computer.
    //random number has to be between 19 and 120.

    var rand = [];

    for (var r = 19; r < 121; r++) {
        rand.push(r);
        console.log(rand);
    }

    function pickrandom(rand) {
        let x = rand[Math.floor(Math.random() * rand.length)];
        RandomNumber = x;
        $("#random").html(RandomNumber);

        console.log(RandomNumber);

    }
    pickrandom(rand);

    // need to create random number for each crystal/ I can put them in a function or just varaible.
    //I chose ths way because it less coding.
    // the random number has to be between 1 and 12.

    let crystal1 = Math.floor(Math.random() * 12) + 1;
    let crystal2 = Math.floor(Math.random() * 12) + 1;
    let crystal3 = Math.floor(Math.random() * 12) + 1;
    let crystal4 = Math.floor(Math.random() * 12) + 1;


    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);



    // activate each button to start working.
    //when we use click event random number will generate for each crystal.
    // lose or win is related to each cystal click.
    //the total score need to add up and put it in totalscore box.
    // need to set if statement to each button and put the result associated with each Id.


    //Crystal one function.
    $("#crystal1").click(function () {
        totalScore = totalScore + crystal1;
        $("#totalscor").html(totalScore);

        if (totalScore === RandomNumber) {
            wins++;
            $("#loseorwin").html("You win !!!!");
            $("#wins").html("Wins: " + wins);

            gamerest();
        }

        else if (totalScore > RandomNumber) {
            losses++;
            $("#loseorwin").html("You lose !!!!");
            $("#losses").html("Losses: " + losses);

            gamerest();
        }
    });

    // Crystal two function.
    $("#crystal2").click(function () {
        totalScore = totalScore + crystal2;
        $("#totalscor").html(totalScore);

        if (totalScore === RandomNumber) {
            wins++;
            $("#loseorwin").html("You win !!!! ");
            $("#wins").html("Wins: " + wins);

            gamerest();
        }

        else if (totalScore > RandomNumber) {
            losses++;
            $("#loseorwin").html("You lose !!!! ");
            $("#losses").html("Losses: " + losses);
            gamerest();

        }
    });

    //Cristal three function.
    $("#crystal3").click(function () {
        totalScore = totalScore + crystal3;
        $("#totalscor").html(totalScore);

        if (totalScore === RandomNumber) {
            wins++;
            $("#loseorwin").html("You win!!!! ");
            $("#wins").html("Wins: " + wins);

            gamerest();

        }

        else if (totalScore > RandomNumber) {
            losses++;
            $("#loseorwin").html("You lose !!!!");
            $("#losses").html("Losses: " + losses);

            gamerest();

        }
    });

    //Crystal four function.
    $("#crystal4").click(function () {
        totalScore = totalScore + crystal4;
        $("#totalscor").html(totalScore);

        if (totalScore === RandomNumber) {
            wins++;
            $("#loseorwin").html("You win !!!");
            $("#wins").html("Wins: " + wins);

            gamerest();

        }

        else if (totalScore > RandomNumber) {
            losses++;
            $("#loseorwin").html("You lose!!!! ");
            $("#losses").html("Losses: " + losses);

            gamerest();

        }
    });

    // to rest the game/need to call all finction and start the totale score to 0.
    function gamerest() {

        totalScore = 0;
        $("#totalscor").html(totalScore);

        pickrandom(rand);

        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;

        console.log(crystal1);
        console.log(crystal2);
        console.log(crystal3);
        console.log(crystal4);

    }

});