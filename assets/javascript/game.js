var wins = 0;
var losses = 0;

//When the game initially loads set the random number to guess, total score, wins, losses and crystal image values
  $(document).ready(function(){

    var counter;

    //Randomly generate a value between 19 and 120
    var targetNumber = [Math.floor(Math.random() * (120-19) ) + 19];

    //Display the random value for the user to see and try to get the correct score
    $(".randomValue").text(targetNumber);

    //Copy the target number to the console log
    console.log("Target" + targetNumber);


    counter = 0;
    //Set the Number of wins, losses and total score to zero
    $(".wins").text(wins);
    $(".losses").text(losses);
    $(".totalScore").text(counter);

    //Randomly generate image values between 1 and 12 that will be used to guess random number
    var numberOptions = [Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1];

    //Print random crystal values selected to console log
    for (var i=0; i<4; i++){
      console.log(numberOptions[i]);
    }

    //Create crystal image
    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {

      // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");

      // First each crystal will be given the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystalImage");

      // Each imageCrystal will be given a src link to the crystal image
      var jewel = "../week-4-game/assets/images/jewel" + i + ".png";
      //console.log(jewel);
      imageCrystal.attr("src", jewel);

      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);

      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystalsNew").append(imageCrystal);
    };

       // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystalImage").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score: " + counter);
    $(".totalScore").text(counter);


    if (counter == targetNumber) {
      wins++;
      $(".wins").text(wins);
      alert("You win!");
      reset();
    }

    else if (counter > targetNumber) {
      losses++;
      $(".losses").text(losses);
      alert("You lose!!");
      reset();
      //console.log(counter);
      //console.log(targetNumber);
    }

    });

  });


//Reset the target/random number to guess, image number options and total score to zero. Restart game.
  function reset(){
    
    $(".crystalImage").remove();

    //Randomly generate a value between 19 and 120
    var targetNumber = [Math.floor(Math.random() * (120-19) ) + 19];

    //Display the random value for the user to see and try to get the correct score
    $(".randomValue").text(targetNumber);

    //Copy the target number to the console log
    console.log("Target" + targetNumber);


    counter = 0;
    //Set the Number of wins, losses and total score to zero
    //$(".wins").text(wins);
    //$(".losses").text(losses);
    $(".totalScore").text(counter);

    //Randomly generate image values between 1 and 12 that will be used to guess random number
    var numberOptions = [Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1, Math.floor(Math.random()* 12) + 1];

    //Print random crystal values selected to console log
    for (var i=0; i<4; i++){
      console.log(numberOptions[i]);
    }

    //Create crystal image
    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {

      // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");

      // First each crystal will be given the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystalImage");

      // Each imageCrystal will be given a src link to the crystal image
      var jewel = "../week-4-game/assets/images/jewel" + i + ".png";
      //console.log(jewel);
      imageCrystal.attr("src", jewel);

      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);

      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystalsNew").append(imageCrystal);
    };

       // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystalImage").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score: " + counter);
    $(".totalScore").text(counter);


    if (counter == targetNumber) {
      wins++;
      $(".wins").text(wins);
      alert("You win!");
      reset();
    }

    else if (counter > targetNumber) {
      losses++
      $(".losses").text(losses);
      alert("You lose!!");
      reset();
      //console.log(counter);
      //console.log(targetNumber);
    }

    });
  };
