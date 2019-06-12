/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - value will be the console/window object.
* 2. Implicit binding - a function that is called by a preceding dot(similar to a method being called). this refers to the parameter given.
* 3. New binding - Utilizes the new keyword along with a constructor function.
* 4. Explicit binding - When Javascript's .call or .apply methods are used.
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
// Using the previous example

const kitteh = new AnimalPets("Cat", "Pursia")
doggo.facts.call(kitteh)
kitteh.facts.apply(doggo)