// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he didn't have any time to call the police because :insertx: started doing :inserty:.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let weight;
    let temperature;
    let newStory = storyText;
    const itemX = randomValueFromArray(insertX);
    const itemY = randomValueFromArray(insertY);
    const itemZ = randomValueFromArray(insertZ);
    newStory = newStory.replace(/:insertx:/g, itemX);
    newStory = newStory.replace(/:inserty:/g, itemY);
    newStory = newStory.replace(/:insertz:/g, itemZ);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if(document.getElementById("uk").checked) {
    weight = Math.round(300 / 14) + " stone";
    temperature = Math.round((94 - 32) * 5 / 9) + " centigrade";
  } else {
    weight = "300 pounds";
    temperature = "94 fahrenheit";
  }  

  newStory = newStory.replace(/94 fahrenheit/g, temperature);
  newStory = newStory.replace(/300 pounds/g, weight);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
