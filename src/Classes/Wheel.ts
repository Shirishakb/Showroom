// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  private tireBrand: string;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
      this.diameter = diameter;
      this.tireBrand = tireBrand;
  }

  // Getter for the diameter property
  get diameterValue(): number {
      return this.diameter;
  }

  // Getter for the tireBrand property
  get tireBrandValue(): string {
      return this.tireBrand;
  }
}

// Export the Wheel class
export default Wheel;
