"use strict";
let guestNames = ['Hamna', 'Aliya', 'Sara'];
let old_guest = 'Hamna';
let new_guest = 'Mahnoor';
guestNames[0] = new_guest;
for (let i = 0; i < guestNames.length; i++) {
    console.log(`Dear ${guestNames[i]}, you are cordially invited to my dinner party!`);
}
console.log(`Sorry, ${old_guest} can't make it to the dinner party.`);
console.log('We have bigger table now so we are inviting more guests.');
guestNames.unshift('Sadia');
guestNames.splice(2, 0, 'Alieh');
guestNames.push('Fatima');
for (let i = 0; i < guestNames.length; i++) {
    console.log(`Dear ${guestNames[i]}, you are cordially invited to my dinner party!`);
}
