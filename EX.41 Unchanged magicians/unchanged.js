"use strict";
const magicians = ["Ahmed", "Osama", "Sayed"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Copy of the original magicians array
const copiedMagicians = copyArray(magicians);
// Call make_great() with the copied array
make_great(copiedMagicians);
// Display the original magicians array
console.log("Original Magicians:");
show_magicians(magicians);
// Display the modified magicians array
console.log("\nModified Magicians:");
show_magicians(copiedMagicians);
