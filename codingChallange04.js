console.log('CODING CHALLENGE #4');

// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

// //todo creating a constructor function
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// //todo accelerate method of Car
// Car.prototype.accelerate = function () {
//   return console.log('accelerated speed: ', (this.speed += 10));
// };

// //todo brake method of Car
// Car.prototype.brake = function () {
//   return console.log('reduced speed', (this.speed -= 5));
// };

// //todo make EV as child class of Car
// const EV = function (make, speed, charge) {
//   // this.make = make;
//   // this.speed = speed;
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `Tesla going at ${this.speed}km/h, with a charge of ${this.charge}%`
//   );
// };

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`${this.make} battery charged to ${this.charge}%`);
// };

// //creating an instance from EV class
// const tesla = new EV('tesla', 120, 23);

// console.log(tesla);
// console.log(tesla.speed);
// tesla.brake();
// tesla.accelerate();
// tesla.chargeBattery(45);
// console.log(tesla.charge);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log('accelerated speed: ', (this.speed += 10));
  }

  brake() {
    console.log('reduced speed', (this.speed -= 5));
    return this;
  }
}

class EvCl extends CarCl {
  //private property
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate = function () {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  };

  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.#charge}%`);
    return this;
  };
}

const rivian = new EvCl('Rivian', 120, 23);

rivian.accelerate().brake().chargeBattery(79);
