// VARIABLE DECLARATIONS

// STEP 1: Declare and initialize variables
var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

// STEP 3: Create the variable that contains the story string that will be modified
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// STEP 4: Create three arrays, insertX, insertY, and insertZ
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

// STEP 2: randomValueFromArray function
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// STEP 6: result function
function result() {
    // STEP 7: Create a new variable called newStory
    var newStory = storyText;

    // STEP 8: Use the randomValueFromArray() function to generate values for xItem, yItem, and zItem
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // STEP 9: Replace placeholders in newStory string with xItem, yItem, and zItem
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    // STEP 10: If customName is not empty, replace 'Bob' with customName
    if (customName.value !== "") {
        newStory = newStory.replace("Bob", customName.value);
    }

    // STEP 11: If the metric radio button is checked, convert temperature and weight
    if (document.getElementById("metric").checked) {
        // STEP 11a: Convert weight from pounds to kilograms
        var weight = 300 * 0.453592;
        // STEP 11b: Replace the string '300 pounds' with the updated weight in kg
        newStory = newStory.replace("300 pounds", weight.toFixed(2) + " kilograms");

        // STEP 12a: Convert temperature from Fahrenheit to Celsius
        var temp = (94 - 32) * 5/9;
        // STEP 12b: Replace the string '94 fahrenheit' with the updated temperature in °C
        newStory = newStory.replace("94 farenheit", temp.toFixed(2) + " Celsius");
    }

    // STEP 13: Update the textContent property of the story variable
    story.textContent = newStory;

    // The following line makes the paragraph visible
    story.style.visibility = "visible";
}

// STEP 5: Add a click event listener to the randomize variable
randomize.addEventListener("click", result);
