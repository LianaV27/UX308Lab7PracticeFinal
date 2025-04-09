function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9 
    return celsius;
}

function calculateAcres(squareft){
    const acres = squareft/43560
    return acres;
}

function mowGrass(width,length,cutPerMinute){
    const time = (width * length) * cutPerMinute
    return time;
}

function airQuality(index){
    let quality;
    if (index  >= 0 && index <=50) {
        quality = "Good";

    } else if (index >= 51 && index <= 100) {
        quality = "Moderate";

    } else if (index >= 101 && index <= 150) {
        quality = "Unhealthy for Sensitive Groups";

    } else if (index >= 151 && index <= 200) {
        quality = "Unhealthy";

    } else if (index >= 201 && index <= 300) {
        quality = "Very Unhealthy";
    
    } else if (index > 300){
        quality = "Hazardous";
    } 

    return quality;
}

function yeeHa(number){
    let phrase;

    if (number % 21 == 0){
        phrase = "Yee Ha";

    } else if (number % 7 == 0){
        phrase = "Ha";

    } else if (number % 3 == 0){
        phrase = "Yee";
    
    } else {
        phrase = "Nada";
    }

    return phrase;
}



export {hello, fahrenheitToCelsius, calculateAcres, mowGrass, airQuality, yeeHa}