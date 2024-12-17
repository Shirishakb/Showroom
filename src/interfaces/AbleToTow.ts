// import the classes
import Truck from "../Classes/Truck.js";
import Motorbike from "../Classes/Motorbike.js";
import Car from "../Classes/Cars.js";

// define the interface
interface AbleToTow {
    // declare the properties
    towingCapacity: number;
    // tow method takes a truck or a motorbike or a car as an argument
    tow(vehicle: Truck | Motorbike | Car): void;
}

// export the interface
export default AbleToTow;
