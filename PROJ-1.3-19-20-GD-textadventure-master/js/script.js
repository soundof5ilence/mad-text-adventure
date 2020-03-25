const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');
const treasure = document.getElementById('treasure');


let gotSword = false;
let key = false;
let currentLocation = 15;

let locations = []; // 0 tot 3 zijn geen echte locaties om de map klein te houden.
locations[0] = "geen locatie";
locations[1] = "geen locatie";
locations[2] = "geen locatie";
locations[3] = "geen locatie";
locations[4] = "Brood schappen";
locations[5] = "kaas afdeling";
locations[6] = "magazijn deur";
locations[7] = "In het magazijn."
locations[8] = "zuivel schappen"
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
images[15] = "room15.jpg";

directions = [];// kamer 0 tot 4 zijn of limits dus is er geen movements daar.
directions[0] = [];
directions[1] = [];
directions[2] = [];
directions[3] = [];
directions[4] = ["oost","zuid"];
directions[5] = ["oost", "west", "zuid"];
directions[6] = ["oost", "west", "zuid"];//oost komt als je de lightsaber heeft.
directions[7] = ["west"];
directions[8] = ["noord", "oost", "zuid"];
directions[9] = ["noord", "oost", "west", "zuid"];
directions[10] = ["noord", "oost", "west", "zuid"];
directions[11] = ["west", "zuid"]
directions[12] = ["noord"];
directions[13] = ["noord"];
directions[14] = ["noord", "oost"];
directions[15] = ["noord", "west"];

lockedDirections = [];
lockedDirections[6] = ["oost", "west", "zuid"];

descriptions = [];// kamers 0 tot 4 hoor je niet te komen
descriptions[0] = "how did you get here?";
descriptions[1] = "how did you get here?";
descriptions[2] = "how did you get here?";
descriptions[3] = "how did you get here?";
descriptions[4] = "je staat bij de broodafdeling, er liggen bolletjes en planken vol brood. niks echt iets bijzonder hier.";
descriptions[5] = "je staat bij de kaas afdeling. er is nooit te weinig KAAS.";
descriptions[6] = " je ziet ehh..... en vrouw zittend op een troon van toilet papier voor de magazijn deur. ze zegt: YOU! if you want some of my precious toilet paper you'll need to defeat ME!'....(editer note the key is not functional so i just unlocked the room for now)";
descriptions[7] = "You have proven yourself worthy. the toilet paper is yours. je staat in het magazijn en vindt een kamer VOL met toilet papier! YOU WON! ";
descriptions[8] = "je staat in de zuivel afdeling. ik denk niet dat we melk te kort hebben.";
descriptions[9] = "je staat in de chips schappen. zo te zien met alle jongere die thuis blijven is zowat alles uitverkocht.";
descriptions[10] = "je staat eindelijk bij het toilet papie- ow er is niks meer over! maar je kan niet gaan zonder.";
descriptions[11] = "je staat bij de vlees afdeling. de helft van de schappen staan leeg. gelukkig hoef je niks hier te halen.";
descriptions[12] = "je staat bij de hele kleine diepvries schappen zo te zien is alleen vis nog over.";
descriptions[13] = "je staat bij een kassa's. er is 1 lege kassa en je ziet een lightsaber liggen op de stoel.";
descriptions[14] = "je staat in de groente en fruit afdeling. het lijkt dat het corona epidemic niks heeft gedaan tegen het aantal groenten en fruit.";
descriptions[15] = "je staat in uw lokale albert heijn. en u probeerdt toilet papier halen tegen corona.";

treasures = [];
treasures[13] = "lightsaber";
//treasures[6] = "key";

usingtreasures = [];
usingtreasures[6] = "lightsaber";
//usingtreasures[6] = "key";

treasureImages = [];
treasureImages[13] = "lightsaber.png"
//treasureImages[6] = "Key.png"
function defeat(){
if (gotSword = true){
  lockedDirections[6] = ["oost", "west", "zuid"];
}

}

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
        feedback.innerHTML = "theres a time and place for everything, but not now and not here.";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation();
      myInput.value = "";
    }

    if (inputArray[0] == "pak") {
      console.log('ga wat pakken');
      if  ( treasures[currentLocation].indexOf(inputArray[1]) != -1){
      gotSword = true;
     console.log('its over anakin...i got the highground.')
      }
      myInput.value = "";
    }

    if (inputArray[0] == "gebruik"){
      console.log('ga wat gebruiken');

      myInput.value = "";
    }

    if (inputArray[0] != "ga" && inputArray[0] != "pak" && inputArray[0] != "gebruik" ){
      feedback.innerHTML = "mogelijke commando's zijn: ga, pak en gebruik";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }
     
    
  }
}


function showMyTreasure(){
  if(typeof treasureImages[currentLocation] != "undefined")
  {
    console.log(treasureImages[currentLocation]);
    treasure.src = "Pictures/" + treasureImages[currentLocation];
  }
}
function Locked(a) {
  if (lockedDirections[a] == null){
    return false;
  }
  else {
    return true;
  }
}


function giveLocation() {
  
  divLocation.innerHTML = locations[currentLocation]+ " => grid " + currentLocation;
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "media/" + images[currentLocation];
  myDirections = "mogelijke richtingen zijn: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
  myPossibilities.innerHTML = myDirections;
  myInventory.innerHTML = "schrijf pak en dan wat je wilt oppakken.";
  showMyTreasure(currentLocation);
}

function removeFeedback() {
  feedback.innerHTML = "";
}



giveLocation();
