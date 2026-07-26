let editingFood = null;

//USER PROFLILE
const defaultProfile = {
  targetCalories: 2000,
  targetProtein: 140,
};

let profile =
  JSON.parse(localStorage.getItem("profile")) ||
  structuredClone(defaultProfile);

function saveProfile() {
  localStorage.setItem("profile", JSON.stringify(profile));
}



function loadFoods() {
  const savedFoods = localStorage.getItem("foods");

  let userFoods = {};

  if (savedFoods) {
    userFoods = JSON.parse(savedFoods);
  }

  const mergedFoods = {
    ...defaultFoods,

    ...userFoods,
  };

  localStorage.setItem("foods", JSON.stringify(mergedFoods));

  return mergedFoods;
}

function checkFoodDatabaseVersion() {
  const savedVersion = localStorage.getItem("foodDatabaseVersion");

  if (savedVersion !== FOOD_DATABASE_VERSION) {
    console.log(
      "Updating food database:",
      savedVersion,
      "→",
      FOOD_DATABASE_VERSION,
    );

    localStorage.setItem("foodDatabaseVersion", FOOD_DATABASE_VERSION);
  }
}

// =====================
// DATA
// =====================

//let foods = JSON.parse(localStorage.getItem("foods")) || structuredClone(defaultFoods);
checkFoodDatabaseVersion();

let foods = loadFoods();
// =====================
// FAV FOODS DATA
// =====================

//let favoriteFoods = [
//"egg",
//  "peanutbutter sandwich",
//  "cappuccino",
//  "speisequark",
//"chicken"
//];

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
  const displayName = document.getElementById("foodName").value.trim();
  const name = displayName.toLowerCase();
  const cal = parseFloat(document.getElementById("foodCal").value);
  const protein = parseFloat(document.getElementById("foodProtein").value);
  const type = document.getElementById("foodType").value;
  const category = document.getElementById("foodCategory").value;

  if (!name || isNaN(cal) || isNaN(protein)) return;

  if (editingFood) {
    delete foods[editingFood];
  }

  const mode = document.getElementById("foodMode").value;

  const edible = parseFloat(document.getElementById("foodEdible").value);

  //FOODS OBJECT

  foods[name] = {
    name: displayName,

    calories: cal,

    protein,

    mode,

    edibleFactor: mode === "grams" ? edible / 100 : 1,

    favourite: document.getElementById("foodFavourite").checked,

    type,

    category,

    //icon: "default",
  };

  editingFood = null;
  document.getElementById("foodFavourite").checked = false;

  saveFoods();
  refreshUI();

  document.getElementById("foodName").value = "";
  document.getElementById("foodCal").value = "";
  document.getElementById("foodProtein").value = "";
  document.getElementById("foodType").value = "food";
  document.getElementById("foodCategory").value = "Other";
}

// =====================
// DELETE FOOD FUNC
// =====================

function deleteFood(name) {
  delete foods[name];

  saveFoods();

  refreshUI();
}

// =====================
// EDIT FOOD FUNC
// =====================

function editFood(name) {
  editingFood = name;
  const food = foods[name];

  document.getElementById("foodName").value = food.name || name;

  document.getElementById("foodCal").value = getCalories(food);

  document.getElementById("foodProtein").value = getProtein(food);

  document.getElementById("foodMode").value = food.mode || "unit";

  document.getElementById("foodFavourite").checked = food.favourite || false;

  document.getElementById("foodType").value = food.type || "food";

  document.getElementById("foodCategory").value = food.category || "Other";

  if (food.mode === "grams") {
    document.getElementById("foodEdible").value =
      (food.edibleFactor || 1) * 100;
  }
  document.getElementById("foodMode").dispatchEvent(new Event("change"));
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
