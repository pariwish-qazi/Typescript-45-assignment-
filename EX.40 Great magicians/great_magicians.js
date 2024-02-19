"use strict";
let magicians = ["Ahmed", "Osama", "Sayed"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(+magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log("The Great " + magicians[i]);
    }
}
show_magicians(magicians);
make_great(magicians);
