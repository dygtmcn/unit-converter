/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const button = document.getElementById("btn")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")

button.addEventListener("click", function() {  
    
    const myValue = document.getElementById("inpt").value;
    const resultFeet = Number(myValue * 3.281).toFixed(3)
    const resultGallon = Number(myValue * 0.264).toFixed(3)
    const resultPound = Number(myValue * 2.204).toFixed(3)
    const resultMeter = Number(myValue / 3.281).toFixed(3)
    const resultLiter = Number(myValue / 0.264).toFixed(3)
    const resultKilos = Number(myValue / 2.204).toFixed(3)
    
    p1.innerText = `${myValue} meters = ${resultFeet} feet | ${myValue} feet = ${resultMeter} meters`
    p2.innerText = `${myValue} liters = ${resultGallon} gallons | ${myValue} gallons = ${resultLiter} liters`
    p3.innerText = `${myValue} kilos = ${resultPound} pounds | ${myValue} pounds = ${resultKilos} kilos`
})