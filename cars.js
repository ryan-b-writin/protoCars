"use strict"
// Create a function named Car with one
// property named `manufactured_date`
function Car () {
  this.manufactured_date = Date.now();
};

/*
  Create a function named Make.
  Set its prototype to the Car function.
  Define a property `manufacturer` with a default value of empty string.
 */
function Make () {
  this.manufacturer = "";
}
Make.prototype = new Car();
Make.prototype.setManufacturer = function(company) {
  this.manufacturer = company;
}

/*
    Create a new Make object - your favorite one (e.g. Mini)
*/
let mini = new Make();
mini.setManufacturer("BMW");

let honda = new Make();


/*
    Create a new Model object of your favorite model
*/

function Model(name){
  this.name = name;
  this.color = "";
}
Model.prototype = new Make();
Model.prototype.setColor = function(color) {
  this.color = color;
}

/*
  Create individual instances of the model
 */

 let Civic = new Model("Civic");
 Civic.setManufacturer("Honda");
 Civic.setColor("Rusty Sunrise");
 let hummer = new Model("Hummer");

function Vehicle() {
  this.wheels = 0;
}
Car.prototype = new Vehicle();

/*
    Being an avid car collector, you own three
    different cars of same model from your
    favorite manufacturer.

    Create three new objects for each of your
    three favorite cars.
*/

function Fit(color){
  this.setManufacturer("Honda");
  this.setColor(color);
  console.log(color+"Fit", this);
}

Fit.prototype = new Model("Fit");

let silverFit = new Fit("Silver");
let blueFit = new Fit("Blue");
let orangeFit = new Fit("Orange");

/*
    Being a rich, avid car collector, you own 2 cars from your second
    favorite manufacturer. You also one 1 car from your third favorite
    manufacturer.
*/

function Prius(color){
  this.setManufacturer("Toyota");
  this.setColor(color);
  console.log(color+"Prius", this);
};

Prius.prototype = new Model("Prius");

let yellowPrius = new Prius("Yellow");
let greenPrius = new Prius("Green");

let volt = new Model("Volt");
volt.setManufacturer("Chevrolet");
volt.setColor("Black");

console.log(volt);
