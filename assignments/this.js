/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - value will be the console/window object.
* 2. Implicit binding - a function that is called by a preceding dot(similar to a method being called). this refers to the parameter given.
* 3. New binding - Utilizes the new keyword along with a constructor function.
* 4. Explicit binding - When Javascript's .call .apply or .bind methods are used. bind is the only one that is used to create an entire new function
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function windowBind(param) {
    console.log(this)
}
// windowBind("Hello")


// Principle 2
// code example for Implicit Binding
const impObject = {
    greeting: "Hello",
    whoAreYou: function (name) {
        console.log(`${this.greeting} ${name}`)
    }
}
impObject.whoAreYou("World")


// Principle 3
// code example for New Binding
function AnimalPets(animal,name) {
    this.typeAnimal = animal
    this.name = name
    this.facts = function() {
        console.log(`${this.name} the ${this.typeAnimal} is super obedient and fluffy!`)
    }
}

const doggo = new AnimalPets("Dog", "Maxwell")
doggo.facts()

// Principle 4
// code example for Explicit Binding
function favoriteCars(car1, car2, car3){
    console.log(`${this.name}'s favorite car manufactories are ${car1}, ${car2}, and ${car3}.`)
}

const sally = {
    name: 'Sally'
}
const cars = ['Honda', 'Subaru', 'BMW']

favoriteCars.call(sally, cars[0], cars[1], cars[2])
favoriteCars.apply(sally, cars)
const nuSally = favoriteCars.bind(sally, cars[0], cars[1], cars[2])
nuSally()