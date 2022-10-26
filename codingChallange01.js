console.log('CODING CHALLENGE #1');

// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

///////////////////////////////////////////////////////

//  1.Use a constructor function to implement a 'Car'. A car has a 'make' and a
//  'speed' property. The 'speed' property is the current speed of the car in
//  km/h

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them

const carBMW = new Car('BMW', 120);
const carMercedes = new Car('Mercedes', 95);

console.log(carBMW.make);
carBMW.accelerate();
carBMW.accelerate();
carBMW.brake();
carBMW.brake();
carBMW.brake();

console.log(carMercedes.make);
carMercedes.accelerate();
carMercedes.accelerate();
carMercedes.brake();
carMercedes.brake();
carMercedes.brake();
// console.log('brake', carBMW.brake());
