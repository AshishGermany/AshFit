console.log("AshFit v0.3.4 Alpha");
// =====================
// ADD FOOD CORE
// =====================

function addToDay(name, cal, protein) {
  ensureTodayExists();

  // Safety fix for older saved data
  if (!data[today].freq) {
    data[today].freq = {};
  }

  data[today].cal += cal;
  data[today].protein += protein;

  data[today].log.push({
    name,
    cal,
    protein,
  });

  data[today].freq[name] = (data[today].freq[name] || 0) + 1;
}

// =====================
// MAIN INPUT HANDLER
// =====================

function addFood(rawInput) {
  // console.log("addFood received:", rawInput);
  today = ensureTodayExists();

  let input = "";

  if (typeof rawInput === "string") {
    input = rawInput.toLowerCase().trim();
  } else {
    input = document.getElementById("input").value.toLowerCase().trim();
  }

  if (!input) return;

  let matchedFood = null;
  let quantity = 1;

  // grams
  let grams = input.match(/^(\d+)\s*g\s+(.+)$/);

  if (grams) {
    quantity = +grams[1];
    matchedFood = grams[2];

    let foodKey = findFoodKey(matchedFood);

    if (!foodKey) return;

    matchedFood = foodKey;

    const f = foods[matchedFood];

    const edible = f.edibleFactor ?? 1;
    const edibleWeight = quantity * edible;

    addToDay(
      `${quantity}g ${matchedFood}`,
      (getCalories(f) * edibleWeight) / 100,
      (getProtein(f) * edibleWeight) / 100,
    );

    finish();
    return;
  }

  // quantity units
  let qty = input.match(/^(\d+)\s+(.+)$/);

  if (qty) {
    quantity = +qty[1];
    matchedFood = qty[2];

    if (matchedFood.endsWith("s")) {
      matchedFood = matchedFood.slice(0, -1);
    }

    let foodKey = findFoodKey(matchedFood);

    if (!foodKey) return;

    matchedFood = foodKey;

    const f = foods[matchedFood];

    addToDay(
      `${quantity} ${matchedFood}`,
      getCalories(f) * quantity,
      getProtein(f) * quantity,
    );
    finish();
    return;
  }

  // direct match
  if (input === "ketchup") input = "heinz ketchup";

  let foodKey = findFoodKey(input);

  if (!foodKey) return;

  input = foodKey;

  const f = foods[input];

  //addToDay(input, f.cal, f.protein);
  addToDay(input, getCalories(f), getProtein(f));

  finish();
}

// =====================
// FINISH STEP
// =====================

function finish() {
  document.getElementById("input").value = "";

  document.getElementById("suggestions").innerHTML = "";

  save();

  refreshUI();

  document.getElementById("input").focus();
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

// =====================
// INITIAL LOAD
// =====================

refreshUI();
