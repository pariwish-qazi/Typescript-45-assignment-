// array for usernames
let usernames: string[] = ['admin', 'Wasay', 'Manay', 'Eesha', 'Waiz'];

usernames.forEach(username => {
    // check if username is admin
  if (username.toLowerCase() === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } 
  else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});
