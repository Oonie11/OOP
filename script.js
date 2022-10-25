'use strict';

//* The common CONVENTION in OOP is to create the constructor function with first letter Capital
//* FUNCTION EXPRESSION and DECLARATION both work to create a Constructor Function
//* This arrow function will not work here since it does not have its own THIS key-word.
//* the constructor function below will produce an OBJECT

//* An Object consist of properties (data) and methods (piece of code)

const Person = function (firstName, birthYear) {
  //these properties can be called instance properties
  //instance properties will be inherited in all the newly created instances
  this.firstName = firstName;
  this.birthYear = birthYear;

  //*we can add methods too.
  //! BAD practice though. since this will carry over these methods to all the instances.
  //* we can delegate methods to prototype instead (prototypes and prototype inheritance )
  this.calcAge = function () {
    2037 - this.birthYear;
  };
};

//*we call the constructor function using the NEW keyword
const jonas = new Person('Jonas', 1991);
console.log(jonas);
console.log('instanceof:', jonas instanceof Person);

//! behind the scene steps when new keyword is used
//todo 1. a new {} (object) is created
//todo 2. the constructor function is called and this key word points towards this newly created {} (object) ex: this = {}
//todo 3. the {} (object) linked to  prototype
//todo 4. the constructor function automatically return the {} (object).
//todo 5. since the this = {}, we can assign properties to the object using this.properties

//* we can create as many as instances from the class PERSON (constructor function)
//* the process of creating instances is called instantiation
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);
