"use strict";
const guestNames = ['Hamna', 'Aliya', 'Sara'];
const invitationMessage = 'Dear ${guestName}, you are cordially invited to my dinner party!';
for (let i = 0; i < guestNames.length; i++) {
    console.log(invitationMessage.replace('${guestName}', guestNames[i]));
}
