const current_users: string[] = ['Laiba', 'Haya', 'Ali', 'Talha', 'Hassan'];
const new_users: string[] = ['Bisma', 'Haya', 'Yumna', 'Priya', 'Hassan'];

for (let i = 0; i < new_users.length; i++) 
{
    if (current_users.includes(new_users[i])) {
        console.log(`Username ${new_users[i]} is not available. Please enter a new username.`);
    } 
    else {
        console.log(`Username ${new_users[i]} is available.`);}
}
