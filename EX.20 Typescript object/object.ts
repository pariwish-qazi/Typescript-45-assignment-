class Mobile {
    Model: string;
    color: string;
    Performance: string;
  
    constructor(Model: string, color: string, Performance: string) {
      this.Model = Model;
      this.color = color;
      this.Performance = Performance;
    }
  }
  
  const Samsung = new Mobile("S21 ultra", "Black", "Average");
  const Iphone = new Mobile("Iphone 14 pro", "Purple", "Good");
  const Realme = new Mobile("Realme5i", "Blue", "Bad");
  
  // Print information about the Mobile
  console.log(Samsung);
  console.log(Iphone);
  console.log(Realme);