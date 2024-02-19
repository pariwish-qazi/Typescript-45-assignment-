"use strict";
function carInfo(manufacturer, model, year) {
    const carDetails = {
        manufacturer: manufacturer,
        model: model,
        year: year
    };
    return carDetails;
}
const car = carInfo("Honda", "Freed", 2014);
console.log(car);
const car2 = carInfo("Toyota", "Corolla", 2020);
console.log(car2);
const car3 = carInfo("Tesla", "Model S", 2016);
console.log(car3);
