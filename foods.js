const FOOD_DATABASE_VERSION = "1.0";

const defaultFoods = {

  // =====================
  // PROTEIN
  // =====================

  "chicken": {
    name: "Chicken (Thigh & Drumstick)",
    calories: 200,
    protein: 26,
    mode: "grams",
    edibleFactor: 0.765,
    favourite: true,
    category: "Protein",
    type: "food",
    ////icon: "chicken"
  },

  "turkey": {
    name: "Turkey Meat",
    calories: 165,
    protein: 29,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Protein",
    type: "food",
    //icon: "turkey"
  },

  "pork steak": {
    name: "Pork Steak",
    calories: 215,
    protein: 23,
    mode: "grams",
    edibleFactor: 1,
    favourite: true,
    category: "Protein",
    type: "food",
    //icon: "meat"
  },

  "lamb": {
    name: "Lamb Meat",
    calories: 250,
    protein: 25,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Protein",
    type: "food",
    //icon: "meat"
  },

  "prosciutto cotto": {
    name: "Prosciutto Cotto",
    calories: 108,
    protein: 20,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Protein",
    type: "food",
    //icon: "meat"
  },

  "kochschinken": {
    name: "Kochschinken",
    calories: 103,
    protein: 20,
    mode: "grams",
    edibleFactor: 1,
    favourite: true,
    category: "Protein",
    type: "food",
    //icon: "meat"
  },

  "wildschinken": {
    name: "Wildschinken",
    calories: 108,
    protein: 24,
    mode: "grams",
    edibleFactor: 1,
    favourite: true,
    category: "Protein",
    type: "food",
    //icon: "meat"
  },

  "lachsschinken": {
    name: "Lachsschinken",
    calories: 120,
    protein: 24,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Protein",
    type: "food",
    //icon: "meat"
  },

  "chicken slices": {
    name: "Chicken Breast Slices",
    calories: 108,
    protein: 21,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Protein",
    type: "food",
    //icon: "meat"
  },

  "smoked schinken": {
    name: "Smoked Schinken",
    calories: 204,
    protein: 23,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Protein",
    type: "food",
    //icon: "meat"
  },

  "egg": {
    name: "Egg",
    calories: 78,
    protein: 6.5,
    mode: "unit",
    edibleFactor: 1,
    favourite: true,
    category: "Protein",
    type: "food",
    //icon: "egg"
  },


  // =====================
  // DAIRY
  // =====================

  "speisequark": {
    name: "Speisequark",
    calories: 68,
    protein: 12,
    mode: "grams",
    edibleFactor: 1,
    favourite: true,
    category: "Dairy",
    type: "food",
    //icon: "dairy"
  },

  "whole milk": {
    name: "Whole Milk",
    calories: 64,
    protein: 3.4,
    mode: "ml",
    edibleFactor: 1,
    favourite: false,
    category: "Dairy",
    type: "drink",
    //icon: "milk"
  },

  "dr oetker high protein shake": {
    name: "Dr. Oetker High Protein Shake",
    calories: 233,
    protein: 30,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Dairy",
    type: "drink",
    //icon: "shake"
  },

  "muller cold coffee": {
    name: "Müller Cold Coffee",
    calories: 68,
    protein: 3.4,
    mode: "ml",
    edibleFactor: 1,
    favourite: false,
    category: "Dairy",
    type: "drink",
    //icon: "coffee"
  },

  "muller buttermilk": {
    name: "Müller Buttermilch",
    calories: 61,
    protein: 2.6,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Dairy",
    type: "drink",
    //icon: "dairy"
  },


  // =====================
  // DRINKS
  // =====================

  "work coffee": {
    name: "Work Coffee",
    calories: 55,
    protein: 1.5,
    mode: "unit",
    edibleFactor: 1,
    favourite: true,
    category: "Drinks",
    type: "drink",
    //icon: "coffee"
  },

  "home cappuccino": {
    name: "Home Cappuccino",
    calories: 92,
    protein: 0,
    mode: "unit",
    edibleFactor: 1,
    favourite: true,
    category: "Drinks",
    type: "drink",
    //icon: "coffee"
  },

  "fruit juice": {
    name: "Fruit Juice",
    calories: 53.6,
    protein: 0,
    mode: "ml",
    edibleFactor: 1,
    favourite: false,
    category: "Drinks",
    type: "drink",
    //icon: "juice"
  },

  "paulaner limo": {
    name: "Paulaner Limo",
    calories: 37,
    protein: 0,
    mode: "ml",
    edibleFactor: 1,
    favourite: false,
    category: "Drinks",
    type: "drink",
    //icon: "drink"
  },

  "fritz cola": {
    name: "Fritz Cola",
    calories: 42,
    protein: 0,
    mode: "ml",
    edibleFactor: 1,
    favourite: false,
    category: "Drinks",
    type: "drink",
    //icon: "drink"
  },

  "fritz limo": {
    name: "Fritz Limo",
    calories: 41,
    protein: 0,
    mode: "ml",
    edibleFactor: 1,
    favourite: false,
    category: "Drinks",
    type: "drink",
    //icon: "drink"
  },

  "san pellegrino": {
    name: "San Pellegrino",
    calories: 0,
    protein: 0,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Drinks",
    type: "drink",
    //icon: "drink"
  },

    // =====================
  // BAKERY
  // =====================

  "bread": {
    name: "Bread",
    calories: 90,
    protein: 3,
    mode: "unit",
    edibleFactor: 1,
    favourite: true,
    category: "Bakery",
    type: "food",
    //icon: "bread"
  },

  "butter croissant": {
    name: "Butter Croissant",
    calories: 310,
    protein: 6,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Bakery",
    type: "food",
    //icon: "croissant"
  },

  "chicken bakery roll": {
    name: "Chicken Bakery Roll",
    calories: 350,
    protein: 20,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Bakery",
    type: "food",
    //icon: "bread"
  },

  "apple bakery item": {
    name: "Apple Bakery Item",
    calories: 300,
    protein: 5,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Bakery",
    type: "food",
    //icon: "pastry"
  },

  "cheese bakery item": {
    name: "Cheese Bakery Item",
    calories: 300,
    protein: 12,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Bakery",
    type: "food",
    //icon: "pastry"
  },

  "tuna bakery item": {
    name: "Tuna Bakery Item",
    calories: 300,
    protein: 18,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Bakery",
    type: "food",
    //icon: "pastry"
  },

  "bakery pizza snack": {
    name: "Bakery Pizza Snack",
    calories: 300,
    protein: 10,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Bakery",
    type: "food",
    //icon: "pizza"
  },

  "salami roll": {
    name: "Bakery Salami Roll",
    calories: 300,
    protein: 12,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Bakery",
    type: "food",
    //icon: "bread"
  },

  "amerikaner": {
    name: "Amerikaner",
    calories: 250,
    protein: 4,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Bakery",
    type: "food",
    //icon: "pastry"
  },


  // =====================
  // SNACKS
  // =====================

  "peanut butter": {
    name: "Peanut Butter",
    calories: 605,
    protein: 27,
    mode: "grams",
    edibleFactor: 1,
    favourite: true,
    category: "Snacks",
    type: "food",
    //icon: "nuts"
  },

  "snickers mini": {
    name: "Snickers Mini",
    calories: 43,
    protein: 0.5,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Snacks",
    type: "food",
    //icon: "chocolate"
  },

  "schoko keks riegel": {
    name: "Schoko-Keks-Riegel",
    calories: 132,
    protein: 2,
    mode: "unit",
    edibleFactor: 1,
    favourite: true,
    category: "Snacks",
    type: "food",
    //icon: "chocolate"
  },

  "muesli bar": {
    name: "Müsliriegel",
    calories: 108,
    protein: 2,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Snacks",
    type: "food",
    //icon: "bar"
  },

  "pocket coffee": {
    name: "Pocket Coffee",
    calories: 40,
    protein: 0,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Snacks",
    type: "drink",
    //icon: "chocolate"
  },

  "pan di stelle": {
    name: "Pan di Stelle",
    calories: 480,
    protein: 7,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Snacks",
    type: "food",
    //icon: "cookie"
  },

  "wafer": {
    name: "Wafer",
    calories: 560,
    protein: 8,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Snacks",
    type: "food",
    //icon: "cookie"
  },

  "potato chips": {
    name: "Potato Chips",
    calories: 533,
    protein: 7,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Snacks",
    type: "food",
    //icon: "chips"
  },

  "doritos": {
    name: "Doritos",
    calories: 480,
    protein: 6,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Snacks",
    type: "food",
    //icon: "chips"
  },

  "cornetto": {
    name: "Cornetto",
    calories: 366,
    protein: 6,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Snacks",
    type: "food",
    //icon: "icecream"
  },

  "cheesecake": {
    name: "Cheesecake",
    calories: 246,
    protein: 6.5,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Snacks",
    type: "food",
    //icon: "cake"
  },


  // =====================
  // VEGETABLES
  // =====================

  "tomato": {
    name: "Tomato",
    calories: 20,
    protein: 1,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Vegetables",
    type: "food",
    //icon: "vegetable"
  },

  "potato wedges": {
    name: "Potato Wedges",
    calories: 150,
    protein: 3,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Vegetables",
    type: "food",
    //icon: "potato"
  },

  "baby potatoes": {
    name: "Baby Potatoes",
    calories: 77,
    protein: 2,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Vegetables",
    type: "food",
    //icon: "potato"
  },

  "capsicum": {
    name: "Capsicum",
    calories: 31,
    protein: 1,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Vegetables",
    type: "food",
    //icon: "vegetable"
  },

  "onion": {
    name: "Onion",
    calories: 40,
    protein: 1.1,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Vegetables",
    type: "food",
    //icon: "vegetable"
  },


  // =====================
  // FRUIT
  // =====================

  "nectarine": {
    name: "Nectarine",
    calories: 60,
    protein: 1,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Fruit",
    type: "food",
    //icon: "fruit"
  },

  "frozen berries": {
    name: "Frozen Berries",
    calories: 50,
    protein: 1,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Fruit",
    type: "food",
    //icon: "fruit"
  },

    // =====================
  // READY MEALS / FROZEN
  // =====================

  "frozen pizza": {
    name: "Frozen Pizza",
    calories: 818,
    protein: 36,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Ready Meals",
    type: "food",
    //icon: "pizza"
  },

  "frozen meal": {
    name: "Frozen Meal",
    calories: 104,
    protein: 6.2,
    mode: "grams",
    edibleFactor: 1,
    favourite: false,
    category: "Ready Meals",
    type: "food",
    //icon: "meal"
  },


  // =====================
  // CONDIMENTS
  // =====================

  "heinz ketchup": {
    name: "Heinz Ketchup",
    calories: 20,
    protein: 0.2,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Condiments",
    type: "food",
    //icon: "sauce"
  },

  "butter schmalz": {
    name: "Butter Schmalz",
    calories: 18,
    protein: 0,
    mode: "unit",
    edibleFactor: 1,
    favourite: false,
    category: "Condiments",
    type: "food",
    //icon: "butter"
  },


  // =====================
  // MEALS
  // =====================

  "daily breakfast": {
    name: "Daily Breakfast",
    calories: 380,
    protein: 8,
    mode: "unit",
    edibleFactor: 1,
    favourite: true,
    category: "Meals",
    type: "meal",
    //icon: "breakfast"
  }

};