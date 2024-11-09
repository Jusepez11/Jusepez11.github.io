const polygon = {
    1 : "henagon",
    2 : "digon",
    3 : "trigon",
    4 : "tetragon",
    5 : "pentagon",
    6 : "hexagon",
    7 : "heptagon",
    8 : "octagon",
    9 : "enneagon",
    10 : "decagon",
    11: "hendecagon"
};

function taxEvasion(){
    const textElement = document.getElementById("buttons");
    textElement.classList.remove("hidden");
    textElement.innerHTML = "<p>Unfortunately the IRS took down this message.</p>";
    
}

function tip(){
    const textElement = document.getElementById("buttons");
    textElement.classList.remove("hidden");
    textElement.innerHTML = "<p>Don't walk in front of a train.</p>";

}

function funFact(){
    const textElement = document.getElementById("buttons");
    textElement.classList.remove("hidden");
    textElement.innerHTML = "<p>The honey badger is the most badass animal ever.</p>";

}

function randomQuote(){
    const textElement = document.getElementById("buttons");
    textElement.classList.remove("hidden");
    textElement.innerHTML = "<p>Being a good example is the best form of service.</p>";

}

function easterEgg(){
    const textElement = document.getElementById("buttons");
    textElement.classList.remove("hidden");


    document.getElementById("egg").innerHTML = "<h2 id='egg'>F1rst Scr1pts Page</h2>";

}

function submitText() {
    const textElement = document.getElementById("text");
    const name = document.getElementById("name").value; // Add .value to get the input value
    const mood = document.getElementById("mood").value; // Add .value to get the input value

    if (name && mood) {
        textElement.classList.remove("hidden");
        textElement.innerHTML = `<p>The Dinainca National Distributor welcomes you, ${name}! We're glad you are doing ${mood}!</p>`;
    } else {
        textElement.innerHTML = "<p>Please enter a name or mood based of what's missing.</p>";
    }
}

function showPolygon() {
    const polygonElement = document.getElementById("polygon");
    polygonElement.classList.remove("hidden");
    
    const numberInput = document.getElementById("number").value; // Add .value to get the input value
    
    if (numberInput >= 1 && numberInput <= 11) {
        polygonElement.innerHTML = `<p>Your polygon is a ${polygon[numberInput]}!</p>`;
    } else {
        polygonElement.innerHTML = "<p>Please enter a number between 1 and 11.</p>";
    }
}