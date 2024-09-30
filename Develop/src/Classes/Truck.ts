import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Motorbike from './Motorbike.js';
import Cars from './Cars.js';

class Truck extends Vehicle implements AbleToTow {
  override vin!: string; 
  override towingCapacity: number; 
  override wheels: Wheel[]; 
  override color: string;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(vin, color, make, model, year, weight, topSpeed);
    this.towingCapacity = towingCapacity;

    // Check if the wheels array has 4 elements; if not, create 4 new default Wheel objects
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.color = color; // Initialize the color property
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Cars): void {
    if (vehicle.make && vehicle.model) {
      if (vehicle.weight <= this.towingCapacity) {
        console.log(`${vehicle.make} ${vehicle.model} is being towed`);
      } else {
        console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed`);
      }
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);

    // Print details of the wheels
    this.wheels.forEach((wheel, index) => {
      console.log(`Wheel ${index + 1}: ${wheel.diameterValue} inch with a ${wheel.tireBrandValue} tire`);
    });
  }
}

// Export the Truck class as the default export
export default Truck;
