const picOfDays = document.querySelectorAll("img").length;

for (var i = 0; i < picOfDays; i++) { 
    document.querySelectorAll('img')[i].addEventListener("click", function() {

        var picClassName = this.id;

          switch (picClassName) { 
            case "sun": 
              var dayOne = new Audio("sounds/bird-1.mp3");
              dayOne.play();
              break;
            
            case "mon":
              var dayTwo = new Audio("sounds/bird-2.mp3");
              dayTwo.play();
              break;

            case "tues":
              var dayThree = new Audio("sounds/bird-3.mp3");
              dayThree.play();
              break;

            case "wed":
              var dayFour = new Audio("sounds/bird-4.mp3");
              dayFour.play();
              break;
            
            case "thurs":
              var dayFive = new Audio("sounds/bird-5.mp3");
              dayFive.play();
              break;

            case "fri":
              var daySix = new Audio("sounds/bird-6.mp3");
              daySix.play();
              break;

            case "sat":
              var daySeven = new Audio("sounds/bird-7.mp3");
              daySeven.play();
              break;

            default:
        }

    });
}

/*function playAudio(daySound) { 
  new Audio(daySound).play();
} */