function makeSandwich(items: string[]): void 
{
    console.log("Make a sandwich with:");
    items.forEach(item => console.log("- " + item));
}

makeSandwich(["Bun", "Cheese", "Lettuce"]);
makeSandwich(["Chicken", "Beef"]);
makeSandwich(["Ketchup", "Mayonnaise", "Mustard"]);
console.log("Enjoy your sandwich!");