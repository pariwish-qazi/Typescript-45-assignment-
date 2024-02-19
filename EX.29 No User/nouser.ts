let usernames: string[] = ['admin', 'Wasay', 'Manay', 'Eesha', 'Waiz'];

if (usernames.length === 0) {
  console.log("We need to find some more users!");
} 
// Removimg all usernames from the array
else {
  usernames = [];
  console.log("All usernames have been removed. " + usernames.length);
}