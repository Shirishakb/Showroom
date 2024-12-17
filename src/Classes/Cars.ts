// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Car class that extends Vehicle class
class Car extends Vehicle {
  override vin: string;
  override wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []
  ) {
    // Call the constructor of the parent class
    super(vin, color, make, model, year, weight, topSpeed, wheels ); // Call super to initialize parent properties

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Initialize wheels: if the provided wheels array does not have 4 elements, create new Wheel objects
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class
    super.printDetails();

    // Print additional details specific to the Car class
    console.log(`VIN: ${this.vin}`);
    this.wheels.forEach((wheel, index) => {
      console.log(`Wheel ${index + 1}: ${wheel.diameterValue} inch with a ${wheel.tireBrandValue} tire`);
    });
  }
}

// Export the Car class as the default export
export default Car;
