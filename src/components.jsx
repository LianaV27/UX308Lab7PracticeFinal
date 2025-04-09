import { airQuality, mowGrass, calculateAcres, fahrenheitToCelsius, hello } from './functions.js';

function Question1() {
    return <section>
        1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name parameter. Test at least 3 names. <br />*Note ... I solved this one already
        <h2>results</h2>
        <p>hello("Rich") == "{hello('Rich')}"</p>
        <p>hello("Bill") == "{hello('Bill')}"</p>
        <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question0() {
    return <section>
        0. Write a function that converts from fahrenheit
        <h2>results</h2>
        <p>fahrenheitToCelsius(32) == "{fahrenheitToCelsius(32)}"</p>
    </section>
}

function Question2() {
    return <section>
        2. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
        <h2>results</h2>
        <p>squareft(43560) == "{calculateAcres(43560)}"</p>
        <p>squareft(87120) == "{calculateAcres(87120)}"</p>
        <p>squareft(130680) == "{calculateAcres(130680)}"</p>
    </section>
}

function Question3() {
    return <section>
    3. Given width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes
    <h2>results</h2>
    <p>mowGrass(2,5,1)== "{mowGrass(2,5,1)}"</p>
    <p>mowGrass(5,4,5)== "{mowGrass(5,4,5)}"</p>
    <p>mowGrass(3,3,3)== "{mowGrass(3,3,3)}"</p>
    </section>
}

function Question4() {
    return <section>
     4. Compute the air quality given an air quality index.
    <h2>results</h2>
    <p>airQuality(1)== "{airQuality(1)}"</p>
    </section>
}

export { Question1, Question0, Question2, Question3, Question4}