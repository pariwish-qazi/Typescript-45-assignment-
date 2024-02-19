let guestNames: string[] = ['Hamna', 'Aliya', 'Sara'];
let old_guest : string = 'Hamna';
let new_guest : string = 'Mahnoor';

guestNames[0] = new_guest;

//for (let i = 0; i < guestNames.length; i++) {
   // console.log(`Dear ${guestNames[i]}, you are cordially invited to my dinner party!`);
//}
console.log(`Sorry, ${old_guest} can't make it to the dinner party.`);
console.log('We have bigger table now so we are inviting more guests.')

guestNames.unshift('Sadia');
guestNames.splice(2,0, 'Alieh');
guestNames.push('Fatima');

for (let i = 0; i < guestNames.length; i++) {
    console.log(`Dear ${guestNames[i]}, you are cordially invited to my dinner party!`);
}

console.log('I am sorry to inform you that I can only invite two guests to my dinner party.');
guestNames.splice(2,2);

console.log(`Dear ${guestNames.splice(2,2)} you are not invited to my dinner party!`);

for (let i = 0; i < guestNames.length; i++) {
    console.log(`Dear ${guestNames[i]}, you are still invited to my dinner party!`);

}
console.log('I am so happy to have you on my list. Thank you so much!');
