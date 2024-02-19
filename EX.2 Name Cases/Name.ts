let personName: string = '';
personName = prompt('Enter your name') ||'';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');

if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Your Name in:
LowerCase: ${lowercase}
UpperCase: ${uppercase}
TitleCase: ${titlecase}`)}