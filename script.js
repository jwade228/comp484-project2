$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.rest-button').click(clickedRestButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Coco", weight:13, happiness:50};
  
    function clickedTreatButton() {
    // Treats make coco happier but makes him gain some weight.
    pet_info.happiness += 10;
    pet_info.weight += 2;
    showPetMessage("Coco loved his treat!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Playing makes coco happier but makes him lose some weight.
      pet_info.happiness += 10;
      pet_info.weight -= 1;
      showPetMessage("Coco had a fun time playing!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
    // Exercising makes Coco happier but makes him lose weight.
    pet_info.happiness -= 5;
    pet_info.weight -= 2;
      showPetMessage("Coco felt tired after exercising.");
      checkAndUpdatePetInfoInHtml();
    }
  
    function clickedRestButton() {
    // Resting hellping Coco feel happy while allowing his weight to stat the same,
    pet_info.happiness += 8;
      showPetMessage("Coco felt rested and happy.");
      checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // The Weight of coco cant go lower than zero.
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0) {
        pet_info.weight = 0;
      }
      // The Happiness of coco cant go lower than zero.
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }

      if (pet_info.weight > 22) {
        pet_info.weight = 22;
      }

      if (pet_info.happiness > 100) {
        pet_info.happiness = 100;
      } 
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);

      updateMood();
    }

    function updateMood() {
      var mood;
      var  moodColor;
    if (pet_info.weight <= 5) {
    mood = "Tired";
   moodColor = "#dc3545";
   } else if (pet_info.weight <= 11 || pet_info.happiness < 50) {
   mood = "Okay";
   moodColor = "#ffd700";
  } else {
  mood = "Happy";
  moodColor = "#2e8b57";
}

      $('.mood').text(mood);
      $('.mood').css('color', moodColor);
      document.querySelector(".mood").style.color = moodColor;
    }

    function showPetMessage(message) {
      var messageBox = $('#pet-message');
      // Slide up method which hides the current pet message
      messageBox.slideUp(200, function() {
        messageBox.text(message);
      // Slide down method which shows the new pet message
        messageBox.slideDown(500);
      });
    }