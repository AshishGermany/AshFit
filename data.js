let editingFood = null;
function ensureTodayExists() {
  const today = getDateKey();

  if (!data[today]) {
    data[today] = {
      cal: 0,
      protein: 0,
      log: [],
      freq: {},
    };
  }

  return today;
}

// =====================
// DATA
// =====================

let foods = JSON.parse(localStorage.getItem("foods")) || {
  chicken: {
    name: "Chicken (Thigh & Drumstick)",

    calories: 165,
    protein: 31,

    mode: "grams",

    edibleFactor: 0.7,

    favourite: true,
  },

  cappuccino: { cal: 120, protein: 5 },
  "peanutbutter sandwich": { cal: 255, protein: 9 },

  egg: {
    name: "Egg",
    calories: 72,
    protein: 6.3,

    mode: "unit",

    favourite: true,
  },

  "work coffee": { cal: 75, protein: 2.5 },
  "snickers mini": { cal: 43, protein: 0.5 },
  "schoko-keks-riegel": { cal: 132, protein: 2 },
  "pork steak": {
    name: "Pork Steak",

    calories: 220,
    protein: 26,

    mode: "grams",

    favourite: true,
  },

  speisequark: {
    name: "Speisequark",

    calories: 67,
    protein: 12,

    mode: "grams",

    favourite: true,
  },

  "heinz ketchup": { cal: 20, protein: 0.2 },
  "butter schmalz": { cal: 18, protein: 0 },
  "san pellegrino": { cal: 117, protein: 0 },
  "work breakfast": {
    name: "Work Breakfast",

    calories: 445,
    protein: 29,

    mode: "unit",

    favourite: true,
  },

  "daily breakfast": { cal: 380, protein: 8 },
};

// =====================
// FAV FOODS DATA
// =====================

let favoriteFoods = [
  //"egg",
  "peanutbutter sandwich",
  "cappuccino",
  "speisequark",
  //"chicken"
];

// =====================
// SAVE / UI
// =====================

function save() {
  localStorage.setItem("data", JSON.stringify(data));
}

// =====================
// SAVE FOOD FUNC
// =====================

function saveFoods() {
  localStorage.setItem("foods", JSON.stringify(foods));
}

// =====================
// STORAGE (daily)
// =====================

function getDateKey() {
  return new Date().toISOString().split("T")[0];
}

let data = JSON.parse(localStorage.getItem("data")) || {};

function ensureTodayExists() {
  const today = getDateKey();

  if (!data[today]) {
    data[today] = {
      cal: 0,
      protein: 0,
      log: [],
      freq: {},
    };
  }

  return today;
}

let today = ensureTodayExists();

// =====================
// ADD FOOD FUNC
// =====================

function addNewFood() {
  const name = document.getElementById("foodName").value.toLowerCase().trim();
  const cal = parseFloat(document.getElementById("foodCal").value);
  const protein = parseFloat(document.getElementById("foodProtein").value);

  if (!name || isNaN(cal) || isNaN(protein)) return;

  if (editingFood) {
    delete foods[editingFood];
  }

  const mode = document.getElementById("foodMode").value;

  const edible = parseFloat(document.getElementById("foodEdible").value);

  foods[name] = {
    name,

    calories: cal,

    protein,

    mode,

    edibleFactor: mode === "grams" ? edible / 100 : 1,

    favourite: document.getElementById("foodFavourite").checked,
  };

  editingFood = null;
  document.getElementById("foodFavourite").checked = false;

  refreshUI();

  document.getElementById("foodName").value = "";
  document.getElementById("foodCal").value = "";
  document.getElementById("foodProtein").value = "";
}

// =====================
// DELETE FOOD FUNC
// =====================

function deleteFood(name) {
  delete foods[name];

  saveFoods();
  renderFoodLibrary();
  renderFrequentFoods();
}

// =====================
// EDIT FOOD FUNC
// =====================

function editFood(name) {
  editingFood = name;
  const food = foods[name];

  document.getElementById("foodName").value = name;

  document.getElementById("foodCal").value = getCalories(food);

  document.getElementById("foodProtein").value = getProtein(food);

  document.getElementById("foodMode").value = food.mode || "unit";

  document.getElementById("foodFavourite").checked = food.favourite || false;

  if (food.mode === "grams") {
    document.getElementById("foodEdible").value =
      (food.edibleFactor || 1) * 100;
  }
}

// ================================
// FUNCTION UNDO LAST AND RESET DAY
// ================================

function undoLast() {
  if (data[today].log.length === 0) return;

  const last = data[today].log.pop();

  data[today].cal -= last.cal;
  data[today].protein -= last.protein;

  save();
  refreshUI();
}

function resetDay() {
  if (!confirm("Reset today's calories?")) return;

  data[today].cal = 0;
  data[today].protein = 0;
  data[today].log = [];

  save();
  refreshUI();
}
