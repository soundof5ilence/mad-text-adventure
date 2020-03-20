const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');

let currentLocation = 4;

let locations = []; // 0 tot 3 zijn geen echte locaties om de map klein te houden.
locations[0] = "geen locatie";
locations[1] = "geen locatie";
locations[2] = "geen locatie";
locations[3] = "geen locatie";
locations[4] = "Brood schappen";
locations[5] = "kaas afdeling";
locations[6] = "magazijn deur";
locations[7] = "In het magazijn."
locations[8] = "melk schappen"
locations[9] = "chips schappen"
locations[10] ="toilet papier schappen"
locations[11] = "vlees afdeling";
locations[12] = "Diepvries schappen";
locations[13] = "kassa's";
locations[14] = "groente en fruit afdeling";
locations[15] = "ingang";

images = [];
images[0] = "room0.jpg";// kamers 0 tot 3 hebben plaatjes maar dienen geen nut.
images[1] = "room1.jpg";
images[2] = "room2.jpg";
images[3] = "room3.jpg";
images[4] = "room4.jpg";
images[5] = "room5.jpg";
images[6] = "room6.jpg";
images[7] = "room7.jpg";
images[8] = "room8.jpg";
images[9] = "room9.jpg";
images[10] = "room10.jpg";
images[11] = "room11.jpg";
images[12] = "room12.jpg";
images[13] = "room13.jpg";
images[14] = "room14.jpg";

directions = [];// kamer 0 tot 4 zijn of limits dus is er geen movements daar.
directions[0] = [];
directions[1] = [];
directions[2] = [];
directions[3] = [];
directions[4] = ["oost","zuid"];
directions[5] = ["oost", "west", "zuid"];
directions[6] = ["oost", "west", "zuid"];
directions[7] = ["west"];
directions[8] = ["noord", "oost", "zuid"];
directions[9] = ["noord", "oost", "west", "zuid"];
directions[10] = ["noord", "oost", "west", "zuid"];
directions[11] = ["west", "zuid"]
directions[12] = ["noord"];
directions[13] = ["noord"];
directions[14] = ["noord", "oost"];
directions[15] = ["noord", "west"];


descriptions = [];// kamers 0 tot 4 hoor je niet te komen
descriptions[0] = "how did you get here?";
descriptions[1] = "how did you get here?";
descriptions[2] = "how did you get here?";
descriptions[3] = "how did you get here?";
descriptions[4] = "u";
descriptions[5] = "u";
descriptions[6] = "u";
descriptions[7] = "u";
descriptions[8] = "u";
descriptions[9] = "u";
descriptions[10] = "u";
descriptions[11] = "u";
descriptions[12] = "u";
descriptions[13] = "u";
descriptions[14] = "u";
descriptions[15] = "u";


myInput.addEventListener('keydown', getInput, false);

function getInput(evt) {
  if (evt.key == "Enter") {
    let inputArray = myInput.value.split(" ");

    if (inputArray[0] == "ga") {
      if (directions[currentLocation].indexOf(inputArray[1]) != -1) {
        switch (inputArray[1]) {
          case "noord":
            currentLocation -= 4;
            break;
          case "zuid":
            currentLocation += 4;
            break;
          case "oost":
            currentLocation += 1;
            break;
          case "west":
            currentLocation -= 1;
            break;
        }
      } else {
        feedback.innerHTML = "dat mag niet";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation();
      myInput.value = "";
    }

    if (inputArray[0] == "pak") {
      console.log('ga wat pakken');
      myInput.value = "";
    }

    if (inputArray[0] == "gebruik"){
      console.log('ga wat gebruiken');
      myInput.value = "";
    }

    if (inputArray[0] != "ga" && inputArray[0] != "pak" && inputArray[0] != "gebruik" ){
      feedback.innerHTML = "mogelijke commando's zijn: ga, pak, gebruik en help";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }

  }
}

function giveLocation() {
  divLocation.innerHTML = locations[currentLocation];
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "media/" + images[currentLocation];
  myDirections = "mogelijke richtingen zijn: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
  myPossibilities.innerHTML = myDirections;
  myInventory.innerHTML = "uw inventory is leeg";
}

function removeFeedback() {
  feedback.innerHTML = "";
}



giveLocation();
