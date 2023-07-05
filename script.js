let capitalCity = "Delhi";
let selectedCity = null;

let cityHyderabad = document.getElementById("cityHyderabad");
cityHyderabad.addEventListener("change", function(event) {
    selectedCity = event.target.value;
})

let cityChennai = document.getElementById("cityChennai");
cityChennai.addEventListener("change", function(event) {
    selectedCity = event.target.value;
})

let cityDelhi = document.getElementById("cityDelhi");
cityDelhi.addEventListener("change", function(event) {
    selectedCity = event.target.value;
})

let cityMumbai = document.getElementById("cityMumbai");
cityMumbai.addEventListener("change", function(event) {
    selectedCity = event.target.value;
})

let resultMsgEl = document.getElementById("resultMsg");

let questionsForm = document.getElementById("questionsForm");
questionsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === null) {
        resultMsgEl.textContent = "Please select the City!";
        resultMsgEl.style.color = "#dc3545";
    } else if (selectedCity === capitalCity) {
        resultMsgEl.textContent = "Correct Answer!";
        resultMsgEl.style.color = "#2b9a40";
    } else {
        resultMsgEl.textContent = "Wrong Answer!";
        resultMsgEl.style.color = "#dc3545";
    }
})