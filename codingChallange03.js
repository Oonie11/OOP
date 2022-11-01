console.log('CODING CHALLENGE #3');

// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)

// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'

// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'

// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definition of polymorphism 😉
// Test data:

// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

//todo creating a constructor function
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//todo accelerate method of Car
Car.prototype.accelerate = function () {
  return console.log('accelerated speed: ', (this.speed += 10));
};

//todo brake method of Car
Car.prototype.brake = function () {
  return console.log('reduced speed', (this.speed -= 5));
};

//todo make EV as child class of Car
const EV = function (make, speed, charge) {
  // this.make = make;
  // this.speed = speed;
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} battery charged to ${this.charge}%`);
};

//creating an instance from EV class
const tesla = new EV('tesla', 120, 23);

console.log(tesla);
console.log(tesla.speed);
tesla.brake();
tesla.accelerate();
tesla.chargeBattery(45);
console.log(tesla.charge);
