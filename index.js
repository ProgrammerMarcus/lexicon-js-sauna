function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 1.8) + 32)
}
function fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5/9)
}

let temperatureCelsius = Math.floor(Math.random() * 145);

do {
    console.log(temperatureCelsius)
    if (temperatureCelsius < 73) {
        alert(`Temperature is ${celsiusToFahrenheit(temperatureCelsius)}, raise temperature!`);
        temperatureCelsius = fahrenheitToCelsius(Number(prompt(`Set temperature above ${celsiusToFahrenheit(73)} degrees`)))
    } else if (temperatureCelsius > 77) {
        alert(`Temperature is ${celsiusToFahrenheit(temperatureCelsius)}, lower temperature!`);
        temperatureCelsius= fahrenheitToCelsius(Number(prompt(`Set temperature below ${celsiusToFahrenheit(77)} degrees`)))
    } else {
        temperatureCelsius = fahrenheitToCelsius(Number(prompt(`Temperature acceptable, set temperature between ${celsiusToFahrenheit(73)} and ${celsiusToFahrenheit(77)}`)))
    }
} while (73 > temperatureCelsius && temperatureCelsius < 77)

alert("Good work, goodbye.")
console.log("Goodbye world!")
