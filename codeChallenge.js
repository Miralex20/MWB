function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}
Vehicle.prototype.getVehDetails = function () {
  console.log(
    `Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`
  );
};

function Car(name, color, wheels, brand, seats) {
  Vehicle.call(this, name, color, wheels)
  this.color = color;
  this.brand = brand;
  this.seats = seats;
}

Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car;
Car.prototype.getDetails = function () {
  console.log(`
      The ${this.color} ${this.name} is of ${this.brand} company.
      It has seating for ${this.seats} people`);
};

const car1 = new Car('Audi', "Black", "4", "Volkwagen", "5");
car1.getDetails();
car1.getVehDetails();