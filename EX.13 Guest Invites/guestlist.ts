const guestNames: string[] = ['Hamna', 'Aliya', 'Sara'];
const invitationMessage: string = 'Dear ${guestName}, you are cordially invited to my dinner party!';

for (let i=0; i<guestNames.length; i++) {
    console.log(invitationMessage.replace('${guestName}', guestNames[i]));}