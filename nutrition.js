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