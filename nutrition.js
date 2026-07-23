function getCalories(food) {
    return food.calories ?? food.cal;
}

function getProtein(food) {
    return food.protein;
}

function getMode(food) {
    return food.mode ?? "unit";
}

function getEdibleFactor(food) {
    return food.edibleFactor ?? 1;
}

function findFoodKey(input){

    input = input.toLowerCase().trim();

    return Object.keys(foods)
    .find(key =>
        key.toLowerCase() === input ||
        foods[key].name.toLowerCase() === input
    );

}