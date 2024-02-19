"use strict";
class Mobile {
    constructor(Model, color, Performance) {
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
