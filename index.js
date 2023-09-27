/*
1 meter = 3.281 feet
1 foot = 0.03048 meters
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const clearBtn = document.getElementById("clear-btn")
let measurementInput = document.getElementById("measurement-input")
let metersFeetUnit = document.getElementById("meters-feet")
let litersGallonsUnit = document.getElementById("liters-gallons")
let kilgramsPoundsUnit = document.getElementById("kilograms-pounds")
let meters = 0
let feet = 0
let liters = 0
let gallons = 0
let kilograms = 0
let pounds = 0

conversionsText()

measurementInput.addEventListener("focus", function() {
    if (measurementInput.value == 0) {
        measurementInput.value = "";
    }
})

measurementInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        convertBtn.click();
    }
});



function conversionsText() {
    if (measurementInput.value === "" ||  measurementInput.value == 0) {
        metersFeetUnit.innerHTML = 
        `0 meters = 0 feet <br />
         0 feet = 0 meters`
        litersGallonsUnit.innerHTML = 
        `0 liters = 0 gallons <br /> 
        0 gallons = 0 liters`
        kilgramsPoundsUnit.innerHTML = 
        `0 kilograms = 0 pounds <br />
        0 pounds = 0 kilograms`;
    } else {
        metersFeetUnit.innerHTML = 
        `${measurementInput.value} meters = ${meters.toFixed(3)} feet <br />
        ${measurementInput.value} feet = ${feet.toFixed(3)} meters`
        litersGallonsUnit.innerHTML = 
        `${measurementInput.value} liters = ${liters.toFixed(3)} gallons <br />
        ${measurementInput.value} gallons = ${gallons.toFixed(3)} liters`
        kilgramsPoundsUnit.innerHTML = 
        `${measurementInput.value} kilograms = ${kilograms.toFixed(3)} pounds <br />
         ${measurementInput.value} pounds = ${pounds.toFixed(3)} kilograms`
    }

}

convertBtn.addEventListener("click", function(){
    convertMeasurements()

})

clearBtn.addEventListener("click", function() {
    measurementInput.value=""
    conversionsText()

})


function convertMeasurements() {
    meters = measurementInput.value * 3.281
    feet = measurementInput.value * 0.3048
    liters = measurementInput.value * 0.264
    gallons = measurementInput.value * 3.78541
    kilograms = measurementInput.value * 2.204
    pounds = measurementInput.value * 0.453592
    
    conversionsText()
    
}
